import { Effect, Actions } from '@ngrx/effects';
import * as authAction from '../action/auth.action'
import { fromPromise } from 'rxjs/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';


import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/app.reducer'
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthEffects {
    constructor(private action$: Actions, private router: Router, private store: Store<fromStore.AppState>) { }
    @Effect()
    authSignup = this.action$
        .ofType(authAction.TRY_SIGN_UP)
        .map((action: authAction.TrySignUp) => action.payload)
        .switchMap((auth: { email: string, password: string }) => {
            console.log(auth)
            return fromPromise(firebase.auth().createUserWithEmailAndPassword(auth.email, auth.password))
                .switchMap(() => fromPromise(firebase.auth().currentUser.getIdToken()))
                .mergeMap((token: string) => {
                    this.router.navigate(['/recipes'])
                    return [
                        {
                            type: authAction.SIGN_UP
                        },
                        {
                            type: authAction.SET_TOKEN,
                            payload: token
                        }
                    ]
                })
                .catch((error) => of({
                    type: authAction.SIGN_UP_FAILURE
                }))
        }

        )
    ;

    @Effect()
    authSignin = this.action$
        .ofType(authAction.TRY_SIGN_IN)
        .map((action: authAction.TrySignIn) => action.payload)
        .switchMap((auth: { email: string, password: string }) => {
            // console.log(auth)
            return fromPromise(firebase.auth().signInWithEmailAndPassword(auth.email, auth.password))
                .switchMap(() => fromPromise(firebase.auth().currentUser.getIdToken()))
                .mergeMap((token: string) => {
                    this.router.navigate(['/recipes'])
                    return [
                        {
                            type: authAction.SIGN_IN_SUCCESS
                        },
                        {
                            type: authAction.SET_TOKEN,
                            payload: token
                        }
                    ]
                })
                .catch((error) => of({
                    type: authAction.SIGN_IN_FAILURE
                }))

        })

    ;

    @Effect({ dispatch: false })
    authLogout = this.action$
        .ofType(authAction.SIGN_OUT_SUCCESS)
        .do(() => {
            this.router.navigate(['/']);
        });
}





