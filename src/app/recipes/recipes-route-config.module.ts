import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes.component";
import { RecipesStartComponent } from "./recipes-start/recipes-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { AuthGuard } from "../auth/authguard.service";
import { NgModule } from "@angular/core";



const recipeRoutes : Routes =[
    {
        path: 'recipes', component: RecipesComponent, children: [
          
          { path: '', component: RecipesStartComponent },
          { path: 'new', component: RecipeEditComponent ,canActivate: [AuthGuard]},
          { path: ':id', component: RecipeDetailComponent },
          { path: ':id/edit', component: RecipeEditComponent ,canActivate: [AuthGuard]}
        ]
      }

];

@NgModule({
    imports:[RouterModule.forChild(recipeRoutes)],
    exports:[RouterModule]
})
export class RecipesRouteConfig{

}