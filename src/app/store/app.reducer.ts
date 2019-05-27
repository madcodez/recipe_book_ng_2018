
import * as fromShoppingList from '../shopping-list/store'

import * as fromAuth from '../auth/store'
import { ActionReducerMap } from "@ngrx/store";


export interface AppState{
    shoppingList : fromShoppingList.IngredientState
    auth : fromAuth.AuthState
}

export const reducer : ActionReducerMap<AppState> ={
    shoppingList : fromShoppingList.reducer,
    auth : fromAuth.reducer
} 