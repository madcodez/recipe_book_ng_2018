import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs/Subject";

export class ShoppingListService {
     changedIngredient = new Subject<Ingredient[]>();
     startedIngredient = new Subject<number>();
     ingredients : Ingredient[] =[];
    

     getIngredients(){
        return  this.ingredients.slice();
     }

     getIngredient(index : number){
         return this.ingredients[index];
     }
     addIngredient (ingredient : Ingredient){
         this.ingredients.push(ingredient);
         this.changedIngredient.next(this.ingredients.slice());
     }
     addIngredients(ingredients : Ingredient[]){
         this.ingredients.push(...ingredients);
         this.changedIngredient.next(this.ingredients.slice());

     }

     updateIngredient(index : number, newIngredient : Ingredient){
         this.ingredients[index]=newIngredient;
         this.changedIngredient.next(this.ingredients.slice())
     }

     deleteIngredient(index : number){
         this.ingredients.splice(index,1);
         this.changedIngredient.next(this.ingredients.slice())
     }
 
}

