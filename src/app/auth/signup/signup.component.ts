import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import {  NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/app.reducer';
import * as authAction from '../store'
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

  message;
  subscription: Subscription;
  constructor(private authService : AuthService , private router : Router , private store : Store<fromStore.AppState>) { }

  ngOnInit() {
  }

  onSignup(form : NgForm){
    let email =form.value.email;
    let password = form.value.password;


    this.store.dispatch(new authAction.TrySignUp({email : email,password : password}));
   this.subscription =  this.store.select('auth').subscribe( authState => this.message = authState.message)
    // this.authService.onSignUp(email,password).then((data) => {
    //   console.log(data);
    //      this.message = "Successfully Created";
    //      setTimeout(()=>this.router.navigate(['/signin']),3000);
    
    //      }).catch(err =>{
     
    
    //       this.message = err.message;
     
     
    //   }
     
    // );
  
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
