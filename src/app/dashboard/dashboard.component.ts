import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private todoServ: ApiServiceService, private router: Router) { 
  }
  todoList: any[]= [];
  model = {};

  ngOnInit() {
    if(this.isLoggedIn){
      // here we will get all the tasks from server and display it on the dashboard
      this.todoServ.getTasks().subscribe((data)=>{
        console.log(data['todos'][0]);
        if(data['todos'] != null){
          this.todoList.push(data['todos'][0]);
        }
      });
    } else{
      this.router.navigate(['/signin']); 
    }
  }

  logout(){
    console.log("logged out!");
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

}
