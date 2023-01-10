import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
baseurl:string="https://buttery-beautiful-nephew.glitch.me/"
// baseurl:string=" http://localhost:3000/"
  
  constructor(private http :HttpClient) { }
  postdetailstoserver(endpoint:string,requestbody:any){
    let url=this.baseurl+endpoint;
    return this.http.post(url,requestbody)
  }

  getdetailsfromserver(endpoint:string,params:HttpParams=new HttpParams()){
    let url=this.baseurl+endpoint;
    return this.http.get(url,{'params':params})
  }
}
