import { Injectable } from "@angular/core";
import {Http , Response} from '@angular/http';
import { RecipeService } from "../recipes/recipe.service";
import { Observable } from "rxjs/Observable";
import { Recipe } from "../recipes/recipe.modal";
import 'rxjs/Rx';
import 'rxjs/operator/map';
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
    constructor( private http : Http, private recipeService: RecipeService ,private authService : AuthService){

    }

    storeRecipes(){
        return this.http.put('https://ng-recipe-book-cdbb8.firebaseio.com/recipes.json?auth='+ this.authService.token,this.recipeService.getRecipes());
    }

    getRecipes(){
       return this.http.get('https://ng-recipe-book-cdbb8.firebaseio.com/recipes.json?auth='+ this.authService.token)
                                 
                                 .subscribe((response: Response)=> {
                                       const recipes : Recipe[] = response.json();
                                      // console.log(recipes);
                                       for(let recipe of recipes){
                                           if(!recipe['ingredients']){
                                               recipe['ingredients'] =[];
                                           }
                                       }
                                       //console.log(recipes);
                                       this.recipeService.setRecipes(recipes);
                                    });



            
     }
}
