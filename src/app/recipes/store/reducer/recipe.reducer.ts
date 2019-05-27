import { Recipe } from "../../recipe.modal";
import { Ingredient } from "../../../shared/ingredient.model";
import * as recipesAction from '../action/recipe.action' 
import { AppState } from "../../../store/app.reducer";

export interface FeatureState extends AppState {
  recipes : RecipeState
}


export interface RecipeState {
   recipes : Recipe[] ;
}

export const initialState : RecipeState = {
      recipes : [
        new Recipe(
          'Tasty Schnitzel',
          'A super-tasty Schnitzel - just awesome!',
          'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
          [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
          ]),
        new Recipe('Big Fat Burger',
          'What else you need to say?',
          'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
          [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
          ])
      ]
    }


  export function reducer 
  (state = initialState , action : recipesAction.RecipesAction )  {
     switch(action.type){
       case recipesAction.SET_RECIPES : {
         return {
           ...state,
           recipes : [...state.recipes,...action.payload]
         }
       }
       case recipesAction.ADD_RECIPE : {
        return {
          ...state,
          recipes : [...state.recipes,action.payload]
        }
      }
      case recipesAction.UPDATE_RECIPE : {
        const recipe = state.recipes[action.payload.index];
        const updateRecipe = {
          ...recipe,
          ...action.payload.recipe
        }
        const recipes = [...state.recipes];
        recipes[action.payload.index] = updateRecipe;
        return {
          ...state,
          recipes : recipes
        }
      }
      case recipesAction.DELETE_RECIPE : {
        const recipes = [...state.recipes];
        recipes.splice(action.payload,1);
        return {
          ...state,
          recipes : recipes
        }
      }
      default : 
         return state;
     }
  }
