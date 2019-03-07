import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private todoServ: ApiServiceService) { }
  
  ngOnInit() {

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
