import { Component, OnInit, Input, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import {Recipe } from '../recipe.modal';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Store } from '@ngrx/store';
import * as  recipeStore from '../store';
import * as fromStore from '../../store/app.reducer' 
import { Observable } from 'rxjs/Observable';
import * as ingredientAction from '../../shopping-list/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
//  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class RecipeDetailComponent implements OnInit , OnDestroy {

  recipes : Observable<{recipes :Recipe[]}> ; 
  recipe : Recipe
  index : number ;
  authState$ : Observable<any>
  subscription: Subscription
  constructor(private recpieService : RecipeService , 
    private route : ActivatedRoute, 
    private router : Router,
    private authService : AuthService,private store : Store<recipeStore.FeatureState> ) {
    
   }
     
  ngOnInit() {
   
    this.subscription = this.route.params.subscribe((params : Params)=>
                                  {
                                  this.index = +params['id'];
                                  this.store.select('recipes').take(1).subscribe(recipeState => this.recipe = recipeState.recipes[this.index]);
                                 
                                  }
                              );
    
    this.authState$ = this.store.select('auth'); 
  }
  addtoShoppinglist(){
    
   this.store.dispatch(new ingredientAction.AddIngredients(this.recipe.ingredients))

  }
  onDeleteRecipe(){
   this.store.dispatch(new recipeStore.DeleteRecipes(this.index) )
   this.router.navigate(['recipes']);
  }
  onEditRecipe(){
   // this.router.navigate(['edit',{relativeTo : this.route}]);
   this.router.navigate(['../',this.index,'edit'],{relativeTo : this.route});
  }
  ngOnDestroy(): void {
 this.subscription.unsubscribe();
  }
}
