import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Todo } from '../Interface/Todo';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private todoServ: ApiServiceService, private router: Router) { 
  }
  todoList: Todo[];
  model = {};

  ngOnInit() {
    if(this.isLoggedIn && this.getToken()){
      // here we will get all the tasks from server and display it on the dashboard
      let headers = new HttpHeaders().set('Content-Type', 'application/json')
                               .set('token', 'Bearer ' + this.getToken());

      this.todoServ.getTasks(this.model, headers).subscribe((data)=>{
        console.log(data);
        // this.todoList.push(data);
      });
    } else{
      this.router.navigate(['/signin']); 
    }
  }

  logout(){
    this.router.navigate(['/signin']);    
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  createTask(){

  }

  onCompletedClick(todo){

  }

  updateTask(todo){

  }

  onEditClick(todo){

  }

  onCancelClick(todo){

  }

  deleteTask(todo){

  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }    

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getToken(){
    return window.localStorage.getItem('id_token');
  }
}
