import * as ingredientAction from '../action/ingredient.action' ;
import { Ingredient } from "../../../shared/ingredient.model";
//import { IngredientState } from './index';




export interface IngredientState {
    ingredients : Ingredient[],
    editedIngredient : Ingredient,
    editIngredientIndex : number
}

const initialState : IngredientState = {
    ingredients :[new Ingredient ('Apple', 10),new Ingredient ('Orange', 5)],
    editedIngredient : null,
    editIngredientIndex : -1
} 


export function reducer(state = initialState,action : ingredientAction.IngredientsAction){
    switch(action.type){
        
        case ingredientAction.ADD_INGREDIENT : {
            
            const ingredient  = action.payload
           // console.log(state)
            return {
                ...state,
                ingredients : [...state.ingredients,ingredient] 

            }
        }
        case ingredientAction.ADD_INGREDIENTS : {
            
            const ingredients  = action.payload
           // console.log(state)
            return {
                ...state,
                ingredients : [...state.ingredients,...ingredients] 

            }
        }
        case ingredientAction.UPDATE_INGREDIENT : {
            
            const ingredient  = state.ingredients[state.editIngredientIndex]
           // console.log(state)

           const updateIngredient = {
               ...ingredient,
               ...action.payload
           }
           const ingredients = [...state.ingredients];
           ingredients[state.editIngredientIndex] = updateIngredient
            return {
                ...state,
                ingredients :ingredients,
                editedIngredient : null,
                editIngredientIndex : -1

            }
        }
        case ingredientAction.DELETE_INGREDIENT : {
            
           const ingredients = [...state.ingredients];
           ingredients.splice(state.editIngredientIndex,1);
            return {
                ...state,
                ingredients : ingredients,
                editedIngredient : null,
                editIngredientIndex : -1

            }
        }
        case ingredientAction.EDIT_START : {
            
            const ingredient = {...state.ingredients[action.payload]}
            return {
                ...state,
                editedIngredient : ingredient,
                editIngredientIndex : action.payload

            }
        }
        case ingredientAction.EDIT_LEAVE : {
            
            
            return {
                ...state,
                editedIngredient : null,
                editIngredientIndex : -1

            }
        }
        default :
          return state;
        
    }

}