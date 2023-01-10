import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isgetotp: boolean = false;
  isverifyotp: boolean = false;
  signupform!: FormGroup
  otpgenerated!: number
  // emitednumber!: number
  otptimer!: number
  sub!: Subscription
  ismobileverified: boolean = false
  issignupsuccess:boolean=false

  constructor(private fb: FormBuilder, private http: HttpService) { }

  ngOnInit(): void {
    this.createsignupform();
  }

  createsignupform() {
    this.signupform = this.fb.group(
      {
        'username': ['', [Validators.required]],
        'mobile number': ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
        'password': ['', [Validators.required]],
        'ismobilenoverified': [false, []]

      })
  }

  getotp() {
    this.isgetotp = true
    //generated 4 digit random number
    this.otpgenerated = Math.floor(1000 + Math.random() * 9000)
    console.log(this.otpgenerated)
    //observable "interval" i used for creating counter
    var emitednumber = interval(1000)
    this.sub = emitednumber.subscribe((res) => {

      this.otptimer = 60 - res
      if (this.otptimer == 0) {
        this.sub.unsubscribe();
      }
    })


  }

  verifyotp(enteredotp: any) {
    this.isverifyotp = true
    if (enteredotp == this.otpgenerated) {
      this.ismobileverified = true
      this.sub.unsubscribe();
      this.signupform.controls['ismobilenoverified'].setValue(true);
    }


  }

  signup() {
      this.http.postdetailstoserver('users', this.signupform.value).subscribe((data: any) => {
      console.log(data)
    })
    this.issignupsuccess=true
  }
}
