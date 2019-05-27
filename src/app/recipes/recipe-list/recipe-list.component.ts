import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.modal';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRecipeStore from '../store'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  
})
export class RecipeListComponent implements OnInit {
 
 
  recipes :Observable<{recipes :Recipe[]}>;
  constructor(private recipeService :RecipeService, private router : Router , private route : ActivatedRoute, private store
     : Store<fromRecipeStore.FeatureState>) { 
   
  }

  ngOnInit() {
   this.recipes=  this.store.select('recipes');
    // this.recipeService.recipeChanged.subscribe((recipes : Recipe[]) =>  this.recipes = recipes);
    // this.recipes=  this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo : this.route});
  }



}
