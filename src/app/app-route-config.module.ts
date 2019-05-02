import { NgModule } from "@angular/core";
import { RouterModule, Routes ,PreloadAllModules} from '@angular/router';


import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { AuthGuard } from "./auth/authguard.service";
import { HomeComponent } from "./core/home/home.component";
import { RecipesComponent } from "./recipes/recipes.component";




const appRoutes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'recipes',loadChildren : "./recipes/recipes.module#RecipesModule"},
 // { path: 'recipies', component: RecipesComponent,canActivate: [AuthGuard] },
  { path: 'shopping-list', component: ShoppingListComponent,canActivate: [AuthGuard] },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{ preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]

})

export class AppRouteConfig {

}
