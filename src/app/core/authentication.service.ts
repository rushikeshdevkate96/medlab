import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
getuser(){
  var user:any
  user=localStorage.getItem('user')
  if(user){
    user=JSON.parse(user)
    return user;
  }
}
gettoken(){
  var token:any
  token=localStorage.getItem('authtoken')
  if(token){
    
    return token;
  }}
  constructor() { }
}
