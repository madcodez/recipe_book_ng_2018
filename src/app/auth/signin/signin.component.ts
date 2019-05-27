import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/app.reducer';
import * as authStore from '../store'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  message ;
  constructor(private authService : AuthService,private router : Router,private store : Store<fromStore.AppState>) { }

  ngOnInit() {
  }
  

  onSignin(form : NgForm){
       let email = form.value.email;
       let password = form.value.password;
       this.store.dispatch(new authStore.TrySignIn({email : email,password : password}))
       this.store.select('auth').subscribe( authState => this.message = authState.message)
      // //  this.authService.onSignin(email, password).then((data) => {
      // //    this.message = "Signing in"
      // //   setTimeout(()=> this.router.navigate(['/recipes']),3000);

      //  }).catch( err => this.message = err.message);
 
  }

}
