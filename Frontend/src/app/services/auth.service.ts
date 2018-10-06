import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';

// 
//import 'rxjs/add/operator/filter';
import { map } from 'rxjs/operators';
//import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  user:any;
  authtoken:any;

  constructor(
    private http:Http,
    public jwtHelper: JwtHelperService
  ) { }

  registerUser(user){

    console.log(user);
    let headers = new Headers();
   headers.append('Content-Type','application/json');

    return this.http.post("http://localhost:3000/user/register",user,{headers:headers}).pipe(map(res=>res.json()));
  }

  loginUser(user){
    let headers = new Headers();
   headers.append('Content-Type','application/json');

    return this.http.post("http://localhost:4201/login",user,{headers:headers}).pipe(map(res=>res.json()));
  }

  storeData(token,userData){
    localStorage.setItem("token",token);
    localStorage.setItem("user",JSON.stringify(userData));
    this.authtoken=token;
    this.user;
  }

  getProfile(){
    this.fetchToken();
    let headers = new Headers();
    headers.append('Authorization',this.authtoken);
    headers.append('Content-Type','application/json');
     return this.http.get("http://localhost:4201/profile",{headers:headers}).pipe(map(res=>res.json()));  
  }

  fetchToken(){
    const token = localStorage.getItem("token");
    this.authtoken = token;
  }

  logoutUser(){
    this.authtoken = null;
    this.user = null;
    localStorage.clear();
  }

  loggedIn():boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
  
}


