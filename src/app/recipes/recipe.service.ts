import { Recipe } from "./recipe.modal";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";
import { Store } from "@ngrx/store";
import * as fromStore from '../shopping-list/store'
//mport { DataStorageService } from "../shared/datastorage.service";
@Injectable()
export class RecipeService { 
    recipeChanged = new Subject<Recipe[]>();
   
    private recipes: Recipe[]=
    [
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
      ];
    constructor(private shoplistService : ShoppingListService, private store : Store<fromStore.IngredientState>){
        
    }
    setRecipes(recipes : Recipe[]){
        this.recipes= recipes;
        this.recipeChanged.next(this.recipes.slice());
    }
    getRecipe(index : number) {
        return this.recipes[index];
    }
    getRecipes() {
         return this.recipes.slice();
    }
    addIngtoShopList(ingredients : Ingredient[]): any {
        this.store.dispatch(new fromStore.AddIngredients(ingredients))
      }

    addRecipe(newRecipe : Recipe){
        this.recipes.push(newRecipe);
        this.recipeChanged.next(this.recipes.slice());
    } 
    updateRecipe(index : number , newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    } 

    deleteRecipe(index: number){
       this.recipes.splice(index,1);
       this.recipeChanged.next(this.recipes.slice());
    }
}
