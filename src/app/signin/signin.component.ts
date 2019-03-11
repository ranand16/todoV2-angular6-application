import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import * as moment from 'moment';

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
      if(data["success"]){
        console.log(data);
        this.setSession(data);
        // succesfully logged in
        this.router.navigate(['/dashboard']);
      } else{
        // invalid credentials
      }
    });
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn,'second');
    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }
}
