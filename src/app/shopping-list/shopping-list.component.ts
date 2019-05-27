import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import {ShoppingListService} from './shopping-list.service'
import { Store } from '@ngrx/store';
import * as ingredientStore from './store'
import * as fromStore from '../store/app.reducer';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers:[]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Observable<{ingredients : Ingredient[]}> ;
  constructor(private shoplistService : ShoppingListService , private store : Store<fromStore.AppState>) { }

  ngOnInit() {

     this.ingredients = this.store.select('shoppingList')
 
    // this.ingredients = this.shoplistService.getIngredients();
    
    // this.shoplistService.changedIngredient.subscribe(
    //   (ingredients : Ingredient[])=>{
    //     this.ingredients = ingredients;
    //   });

  }
  onEditIng(index : number){
 // console.log(index);
      this.store.dispatch(new ingredientStore.EditStart(index));
  }
   
  

}
