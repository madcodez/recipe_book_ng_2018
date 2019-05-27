import {Action } from '@ngrx/store';
import { Ingredient } from '../../../shared/ingredient.model';

export const ADD_INGREDIENT ="[Ingredient] Add Ingredient";

export const ADD_INGREDIENTS ="[Ingredient] Add Ingredients";
export const UPDATE_INGREDIENT ="[Ingredient] Update Ingredient"
export const DELETE_INGREDIENT ="[Ingredient] Delete Ingredient"
export const EDIT_START ="[Ingredient] Edit Start"
export const EDIT_LEAVE ="[Ingredient] Edit leave"


export class AddIngredient implements Action {
    readonly type = ADD_INGREDIENT;
    constructor(public payload : Ingredient){} 
}
export class AddIngredients implements Action {
    readonly type = ADD_INGREDIENTS;
    constructor(public payload : Ingredient[]){} 
}
export class UpdateIngredient implements Action {
    readonly type = UPDATE_INGREDIENT;
    constructor(public payload : Ingredient){} 
}
export class DeleteIngredient implements Action {
    readonly type = DELETE_INGREDIENT;
    constructor(){} 
}
export class EditStart implements Action {
    readonly type = EDIT_START;
    constructor(public payload : number){} 
}
export class EditLeave implements Action {
    readonly type = EDIT_LEAVE;
    constructor(){} 
}
export type IngredientsAction = AddIngredient | AddIngredients | UpdateIngredient | DeleteIngredient | EditStart | EditLeave;