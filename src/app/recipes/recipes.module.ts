import { NgModule } from "@angular/core";


import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipesComponent } from "./recipes.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesStartComponent } from "./recipes-start/recipes-start.component";
import { CommonModule } from "@angular/common";
import { RecipesRouteConfig } from "./recipes-route-config.module";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./store";
import { EffectsModule } from "@ngrx/effects";
import { RecipeEffects } from "./store/effects/recipe.effects";


@NgModule({
    declarations :[ 
                    RecipesComponent,
                    RecipesStartComponent,
                    RecipeEditComponent,  
                    RecipeListComponent,
                    RecipeDetailComponent,
                    RecipeItemComponent
                    
      ] ,
      imports: [
                 CommonModule,
                 RecipesRouteConfig,
                 ReactiveFormsModule ,
                 SharedModule,
                 StoreModule.forFeature('recipes', reducer),
                 EffectsModule.forFeature([RecipeEffects])
               ]
})

export class RecipesModule{
  constructor(){
    console.log("Recipe Module")
  }
}