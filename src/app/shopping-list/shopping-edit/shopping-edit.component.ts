import { Component, OnInit, Output, ElementRef, ViewChild, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs/Subscription';
import * as ingredientStore from '../store'
import * as fromStore from '../../store/app.reducer';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  //ingredientform : FormGroup
  @ViewChild('ingform') form: NgForm;
  editIngredient: Ingredient;
  editMode: boolean = false;

  subscription: Subscription

  constructor(private store: Store<fromStore.AppState>, private shoplistService: ShoppingListService) {

  }

  ngOnInit() {

    this.subscription = this.store.select('shoppingList').subscribe(data => {
        if(data.editIngredientIndex > -1){
          this.editIngredient = data.editedIngredient;
          this.editMode = true;
          this.form.setValue({
            'amount': this.editIngredient.amount,
            'name': this.editIngredient.name
          });
        }

    });



  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.store.dispatch(new ingredientStore.EditLeave())

  }

  onSubmit(ingForm: NgForm) {

    const value = ingForm.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.store.dispatch(new ingredientStore.UpdateIngredient(newIngredient))


    } else {

      this.store.dispatch(new ingredientStore.AddIngredient(newIngredient))

    }
    this.editMode = false;
    this.form.reset();
  }

  onDelete() {
    this.store.dispatch(new ingredientStore.DeleteIngredient())
  
    this.form.reset();
    this.editMode = false;
  }



}
