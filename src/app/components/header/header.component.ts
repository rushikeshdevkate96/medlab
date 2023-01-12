import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


issignin:boolean=true
issignup:boolean=false
actionname:string='signin'
loggedinuserdetails:any
isloggeduserin:boolean=false

@ViewChild( 'closebtn',{read:ElementRef}) closebtn!:ElementRef
@ViewChild( 'loginbtn',{read:ElementRef}) loginbtn!:ElementRef

  cartcount!:Observable<number>
  constructor(private authservice:AuthenticationService,private shared :SharedService,private router:Router) { }

  ngOnInit(): void {
    this.loggedinuserdetails=this.authservice.getuser();
    if(this.authservice.gettoken()){
      this.isloggeduserin=true
    }
   //this is responsible for displaying y=username directly without asking to log in
  
   this.cartcount=this.shared.cartobs
   //we are using async pipe for subscribing this observable

  }
 changeaction(){
this.issignin=false
this.issignup=true
this.actionname='signup'
 }
 gotologin(){
  this.issignin=true
  this.issignup=false
  this.actionname='signin'
 }

 handleloginsuccess(flag:boolean){
  this.isloggeduserin=true
  this.loggedinuserdetails=this.authservice.getuser();
  this.closebtn.nativeElement.click();
 
 }

 redirecttocart(){
  if(this.isloggeduserin){
    this.router.navigate(['/cart'])
  }
  else{
  this.loginbtn.nativeElement.click();
  }
 }
}
