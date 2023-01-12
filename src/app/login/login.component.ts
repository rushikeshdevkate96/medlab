import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../core/http/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup
  isnewuser:boolean=false

  @Output()loginsuccess:EventEmitter<boolean>= new EventEmitter(false);

  constructor(private fb: FormBuilder,private http:HttpService) { }

  ngOnInit(): void {
    this.createform();
  }

  createform() {
    this.loginform = this.fb.group({
      'username': ['', [Validators.required]],
      'password': ['', [Validators.required]]
    })
  }
 

  login(){
    const params:HttpParams=new HttpParams()
          .set('username',this.loginform.controls['username'].value)
          .set('password',this.loginform.controls['password'].value)

          this.http.getdetailsfromserver('users',params).subscribe((response:any)=>{
            if(response && response.length > 0)
            {var user=response[0]
              user['token']="WLdkdk1212kl"
              localStorage.setItem('authtoken',user['token'])
              localStorage.setItem('user',JSON.stringify(user))
              this.isnewuser=false
            this.loginsuccess.emit(true)}
            else {this.isnewuser=true}
          })       
  }

  
}
