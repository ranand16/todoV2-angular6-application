import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public model:any = {};
  constructor(private router: Router, private _apiService: ApiServiceService) { }

  ngOnInit() {
  }

  signin(){
    this._apiService.login(this.model).subscribe(data=>{
      console.log(data);
    });
  }
}
