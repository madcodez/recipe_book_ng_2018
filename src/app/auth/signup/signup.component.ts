import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {  NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  message;
  constructor(private authService : AuthService , private router : Router) { }

  ngOnInit() {
  }

  onSignup(form : NgForm){
    let email =form.value.email;
    let password = form.value.password;
    this.authService.onSignUp(email,password).then((data) => {
      console.log(data);
         this.message = "Successfully Created";
         setTimeout(()=>this.router.navigate(['/signin']),3000);
    
         }).catch(err =>{
     
    
          this.message = err.message;
     
     
      }
     
    );
  
  }

}
