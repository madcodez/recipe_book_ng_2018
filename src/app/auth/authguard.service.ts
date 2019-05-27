import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromStore from '../store/app.reducer';
import * as authStore from './store' 


@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authService : AuthService, private router : Router,private store : Store<fromStore.AppState>){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
         return this.store.select('auth').take(1).map((authState : authStore.AuthState) => authState.authenticated)

       }


}