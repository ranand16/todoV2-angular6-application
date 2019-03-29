import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private todoServ: ApiServiceService, private router: Router) {}
  todoList: any[]= [];
  model = {};

  ngOnInit() {
    if(this.isLoggedIn){
      // here we will get all the tasks from server and display it on the dashboard
      this.todoServ.getTasks().subscribe((data)=>{
        console.log("(data['todos'])");
        console.log((data['todos']));
        if(data['todos'] != null && data['todos']!= ''){
          this.todoList = data['todos'];
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

  createTask(form: NgForm){
    this.model ={
      task: form.value.task,
      isCompleted: false,
      isEditing: false
    };
    this.todoServ.newTask(this.model).subscribe((data)=>{
      console.log(data);
    });
  }

  onCompletedClick(todo){

  }

  updateTask(todo){
    console.log("UPDATE WAS CLCIKED");
  }

  onEditClick(todo){
    console.log("EDIT WAS CLCIKED");
  }

  onCancelClick(todo){
    console.log("CANCEL WAS CLCIKED");
  }

  deleteTask(todo){
    console.log("DELETE WAS CLCIKED");
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    console.log(expiration);
    console.log(expiresAt);
    return moment(expiresAt);
  }    

  isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }
}
