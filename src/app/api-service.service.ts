import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/**
 * @author <Rishabh Anand>
 * @email <ranand16@gmail.com>
 */

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient: HttpClient) { }
  // user service functions
  login(model: any){
    return this.httpClient.post('https://todoapi-v2.herokuapp.com/api/login', model);
  }
  signup(model: any){
    return this.httpClient.post('https://todoapi-v2.herokuapp.com/api/signup', model);
  }
  getUsers(){
    return this.httpClient.get('https://todoapi-v2.herokuapp.com/api/users');
  }
  editUser(userId:any, model: any){
    return this.httpClient.get('https://todoapi-v2.herokuapp.com/api/editUser/:'+userId, model);
  }
  getUser(model: any){
    return this.httpClient.get('https://todoapi-v2.herokuapp.com/api/user', model);
  }

  // todo api services
  newTask(model: any){

    return this.httpClient.patch('https://todoapi-v2.herokuapp.com/api/', model);
  }
  getTasks(){
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'token': this.getToken()});
    return this.httpClient.get('https://todoapi-v2.herokuapp.com/api/', {headers});

  }

  editTask(userId: any, todoId: any, model: any){
    return this.httpClient.patch('https://todoapi-v2.herokuapp.com/api/:'+userId+'/:'+todoId, model);
  }
  deleteTask(todoId: any, model: any){
    return this.httpClient.patch('https://todoapi-v2.herokuapp.com/api/:'+todoId, model);
  }

  getToken(){
    console.log(window.localStorage.getItem('id_token'));
    return window.localStorage.getItem('id_token');
  }
}
