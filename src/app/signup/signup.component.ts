import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public model: any={};
  constructor(private router: Router, private _apiService: ApiServiceService) { }
  ngOnInit() {
  }

  signup(){
    this.model.data = [];
    console.log("Hey you!!");
    this._apiService.signup(this.model).subscribe(data=>{
      // if(this.model.faliureMessage == "User Registration Failed"){
      //   console.log("User Registeration Failed!!");
      // } else{
      //   console.log("User Registeration Success!!");
      //   this.router.navigate(['/signin']);
      // }
      console.log(this.model);
      console.log(data);
      
    },
    error=>{
      console.log("there was an error.");
      console.log(error);
    });
  }

}
