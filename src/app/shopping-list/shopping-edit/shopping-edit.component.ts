import { Component, OnInit, Output, ElementRef, ViewChild, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup ,FormControl, NgForm } from '@angular/forms';
import { Ingredient} from '../../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  //ingredientform : FormGroup
  @ViewChild('ingform') form : NgForm;
  editIngredient : Ingredient;
  editMode : boolean = false;
  editedIngIndex : number;
  subscription : Subscription
  
  constructor(private shoplistService : ShoppingListService ) {
 
   }

  ngOnInit() {

       this.subscription= this.shoplistService.startedIngredient.subscribe((index)=>{


          this.editedIngIndex=index;
          this.editIngredient=this.shoplistService.getIngredient(index);
          console.log( this.editIngredient);
          this.editMode = true;
          this.form.setValue({
            'amount' : this.editIngredient.amount,
            'name' : this.editIngredient.name
          });
     

      });
      
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
       
  }

  onSubmit(ingForm : NgForm){

    const value = ingForm.value;
    const newIngredient = new Ingredient(value.name,value.amount); 
    if(this.editMode){
       this.shoplistService.updateIngredient(this.editedIngIndex,newIngredient);
       this.editMode= false;
      
    }else{
    this.shoplistService.addIngredient(newIngredient);
    
    }
    this.form.reset();
  }

 onDelete(){
   this.shoplistService.deleteIngredient(this.editedIngIndex);
   this.form.reset();
   this.editMode=false;
 } 



}
