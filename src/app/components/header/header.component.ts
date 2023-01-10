import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication.service';

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

  constructor(private authservice:AuthenticationService) { }

  ngOnInit(): void {
    this.loggedinuserdetails=this.authservice.getuser();
    if(this.authservice.gettoken()){
      this.isloggeduserin=true
    }
   //this is responsible for displaying y=username directly without asking to log in
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
  this.closebtn.nativeElement.click();
 
 }
}
