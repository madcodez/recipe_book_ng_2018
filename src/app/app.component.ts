import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'recipe-book-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  loadSelected : string =  'recipe';


  ngOnInit(){
    firebase.initializeApp({ 
       apiKey: "AIzaSyDPpwgtBAJhk1uKYKPVlS807ZwZDzWrKAY",
       authDomain: "ng-recipe-book-cdbb8.firebaseapp.com"});

  }
  onNavigate(selected : string){
    this.loadSelected=selected;
  }
}
