import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  token: string;

  constructor() {
    

   }

   onSignUp(email,password){
    return firebase.auth().createUserWithEmailAndPassword(email,password)
   }


   onSignin(email,password){
     return firebase.auth().signInWithEmailAndPassword(email,password).then( response => {
                        firebase.auth().currentUser.getToken().then(token => this.token = token);
      
     });

   
   }

   onSignout(){
    firebase.auth().signOut();
    this.token = null;
   }

   isAuthenticated(){
     return this.token != null;
   }
}
