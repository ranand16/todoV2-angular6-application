import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Todo } from '../Interface/Todo';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private todoServ: ApiServiceService) { 
  }
  todoList: Todo[];
  model = {};

  ngOnInit() {
    // here we will get all the tasks from server and display it on the dashboard
    this.todoServ.getTasks(this.model).subscribe((data)=>{
      console.log(data);
      // this.todoList.push(data);
    });
  }

  logout(){

  }

  isLoggedIn(){

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

}
