import * as authAction from '../action/auth.action'

export interface AuthState{
    token : string,
    authenticated : boolean,
    message : string
}

export const initialState : AuthState = {
    token : null,
    authenticated : false,
    message : ''
}

export function reducer(state = initialState , action : authAction.AuthAction){
   switch(action.type){
       case authAction.SIGN_IN_SUCCESS :
       case authAction.SIGN_UP_SUCCESS : 
          return {
               ...state,
               authenticated : true,
               message : 'Successful'

          }
       case authAction.SIGN_IN_FAILURE : 
       case authAction.SIGN_UP_FAILURE :
          return {
              ...state,
              message : 'UnSuccessful'

          } 
       case authAction.SIGN_OUT_SUCCESS : 
            return{
                ...state,
                token : null,
                authenticated : false,
                message : 'You are signed out'
            }  

       case authAction.SET_TOKEN : 
         return {
             ...state,
             token : action.payload
         }

       default : 
          return state;
   }
}