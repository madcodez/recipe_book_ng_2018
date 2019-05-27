import {Actions, Effect} from '@ngrx/effects';
import * as recipeAction from '../action/recipe.action';
import * as fromStore from '../../store';
import { Http } from '@angular/http';
import { Store } from '@ngrx/store';
import { Recipe } from '../../recipe.modal'
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeEffects {
    constructor(private action$ : Actions, private http : Http, private store : Store<fromStore.FeatureState>){

    }

    @Effect({dispatch: false})

    storeRecipes = this.action$.ofType(fromStore.STORE_RECIPES)
                            .combineLatest(this.store.select('auth'),
                                           this.store.select('recipes'),
                                           (action : fromStore.RecipesAction,authState,recipeState) => {
                                               return this.http.put('https://ng-recipe-book-cdbb8.firebaseio.com/recipes.json?auth='+
                                               authState.token,recipeState.recipes);
                                           }
                                        );
     @Effect()
     
     getRecipes = this.action$.ofType(fromStore.FETCH_RECIPES)
                              .mergeMap(() => this.store.select('auth'),
                                        (action: fromStore.RecipesAction , authState) => {
                                            return this.http.get('https://ng-recipe-book-cdbb8.firebaseio.com/recipes.json?auth='+ authState.token)
                                            
                                                            .subscribe((response)=> {
                                                            const recipes : Recipe[] = response.json();
                                                            // console.log(recipes);
                                                            for(let recipe of recipes){
                                                                if(!recipe['ingredients']){
                                                                    recipe['ingredients'] =[];
                                                                }
                                                            }
                                                            console.log(recipes);
                                                            this.store.dispatch(new fromStore.SetRecipes(recipes));
                                                        });
                                        } )
}