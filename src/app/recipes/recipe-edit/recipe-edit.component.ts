import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.modal';
import { Store } from '@ngrx/store';
import * as recipeStore from '../store';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id : number;
  editMode = false;

  recipeForm : FormGroup;

  constructor(private router : Router, private route : ActivatedRoute,private recipeService : RecipeService,private store : Store<recipeStore.FeatureState>) {

   }


  ngOnInit() {
     this.route.params.subscribe((params : Params)=>{
       this.id = +params['id'];
       this.editMode = params['id'] != null;
       this.onInitForm();
     })
  }


  onSubmit(){
      let newRecipe = new Recipe(
        this.recipeForm.value['name'],
        this.recipeForm.value['description'],
        this.recipeForm.value['imgpath'],
        this.recipeForm.value['ingredients']
      )
    
      console.log(this.recipeForm.value)
      if(this.editMode){
             this.store.dispatch(new recipeStore.UpdateRecipes({index : this.id,recipe : newRecipe}))
        //   this.recipeService.updateRecipe(this.id,newRecipe)
      }
      else{
           this.store.dispatch(new recipeStore.AddRecipes(newRecipe));
           //this.recipeService.addRecipe(newRecipe)
      }

      this.router.navigate(['../'],{relativeTo : this.route});
    
  }


  onaddIngredient(){
    
    
    (<FormArray>this.recipeForm.controls['ingredients']).push(new FormGroup({
     'name' : new FormControl(null,Validators.required),
     'amount': new FormControl(null,
      [Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
    }));
  }


  onCancel(){
    this.router.navigate(['../'],{relativeTo : this.route});
  }


  onDelete(index){
    console.log(index);
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onInitForm(){

          const recipeIngredients = new FormArray([]);
          let recipeName= '';
          let recipeDescription ='';
          let recipeImagePath =''
          if(this.editMode){

               this.store.select('recipes').take(1)
                        .subscribe( recipeState => {
                          const recipe = recipeState.recipes[this.id];
                          recipeName= recipe.name;
                          recipeDescription=recipe.description;
                          recipeImagePath = recipe.imagePath;
          
                          if(recipe['ingredients']){
          
                            for(let ingredient of recipe.ingredients){
          
                              recipeIngredients.push(new FormGroup({
                                'name' : new FormControl(ingredient.name,Validators.required),
                                'amount': new FormControl(ingredient.amount,
                                  [Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
                              }));
                            }
                          }
                          
                          this.recipeForm = new FormGroup({
                            'name' : new FormControl(recipeName,Validators.required),
                            'imgpath': new FormControl(recipeImagePath,Validators.required),
                            'description': new FormControl(recipeDescription,Validators.required),
                            'ingredients': recipeIngredients
                          });
                        })
       
          }



            this.recipeForm = new FormGroup({
              'name' : new FormControl(recipeName,Validators.required),
              'description' : new FormControl(recipeDescription,Validators.required),
              'imgpath' : new FormControl(recipeImagePath,Validators.required),
              'ingredients': recipeIngredients
            });
    }

}
