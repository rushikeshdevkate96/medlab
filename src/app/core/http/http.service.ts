import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
baseurl:string="https://elemental-lake-coil.glitch.me/"


// baseurl:string=" http://localhost:3000/"
  
httpHeaders:HttpHeaders = new HttpHeaders()
.set('content-type','application/json');
 
  constructor(private http :HttpClient) { }
  postDetailsToServer(endPoint: string,requestBody:any) {
    let url = this.baseurl + endPoint;
    return this.http.post(url, requestBody,{ 'headers': this.httpHeaders});
  }

  getdetailsfromserver(endpoint:string,params:HttpParams=new HttpParams()){
    let url=this.baseurl+endpoint;
    return this.http.get(url,{'params':params})
  }
}
