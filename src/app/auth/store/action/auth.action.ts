import { Action } from "@ngrx/store";


export const TRY_SIGN_UP = "[Auth] Try Sign Up";
export const TRY_SIGN_IN = "[Auth] Try Sign IN";
export const SET_TOKEN = "[Auth] Set Token";
export const SIGN_IN_SUCCESS = "[Auth] Sign In Success";
export const SIGN_IN_FAILURE = "[Auth] Sign In Failure";
export const SIGN_UP_SUCCESS = "[Auth] Sign Up Success";
export const SIGN_UP_FAILURE = "[Auth] Sign Up Failure";
export const SIGN_OUT_SUCCESS = "[Auth] Sign Out Success";
export const SIGN_OUT_FAILURE = "[Auth] Sign Out Failure";
export const SIGN_UP = "[Auth] Sign Up";



export class TrySignUp implements Action {
    readonly type = TRY_SIGN_UP;
    constructor(public payload: { email: string, password: string }) { }
}

export class TrySignIn implements Action {
    readonly type = TRY_SIGN_IN;
    constructor(public payload: { email: string, password: string }) { }
}

export class SetToken implements Action {
    readonly type = SET_TOKEN;
    constructor(public payload: any) { }
}

export class SignUpSuccess implements Action {
    readonly type = SIGN_UP_SUCCESS;

}
export class SignUpFailure implements Action {
    readonly type = SIGN_UP_FAILURE;

}
export class SignInSuccess implements Action {
    readonly type = SIGN_IN_SUCCESS;

}
export class SignInFailure implements Action {
    readonly type = SIGN_IN_FAILURE;

}
export class SignOutSuccess implements Action {
    readonly type = SIGN_OUT_SUCCESS;

}
export class SignOutFailure implements Action {
    readonly type = SIGN_OUT_FAILURE;

}
export class SignUp implements Action {
    readonly type = SIGN_UP;

}

export type AuthAction = SetToken |
    SignInSuccess |
    SignInFailure |
    SignUp |
    SignOutFailure |
    SignOutSuccess |
    TrySignIn |
    TrySignUp |
    SignUpSuccess |
    SignUpFailure;