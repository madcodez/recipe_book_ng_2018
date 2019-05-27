import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { DataStorageService} from '../../shared/datastorage.service'
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import * as fromStore from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import * as recipeStore from '../../recipes/store'
import * as authStore from '../../auth/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  authState$ : Observable<authStore.AuthState>;

  constructor( 
    private dataStoreService : DataStorageService ,
    private authService : AuthService,
     private router : Router,
    private store : Store<fromStore.AppState>) {
     
   }
   
  

  ngOnInit() {
    this.authState$ = this.store.select('auth');

  }

  onSave(){
    this.store.dispatch(new recipeStore.StoreRecipes());

  }
  onFetch(){
    this.store.dispatch(new recipeStore.FetchRecipes());
  }
  onSignout(){
   // this.authService.onSignout();
   this.store.dispatch(new authStore.SignOutSuccess())
    this.router.navigate(['/recipes']);
  }

}
