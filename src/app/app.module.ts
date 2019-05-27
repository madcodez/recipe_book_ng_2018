
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';



import { HeaderComponent } from './core/header/header.component';


import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { RecipesModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';


import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './shared/datastorage.service';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/authguard.service';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { reducer } from './store/app.reducer';
import { AppRouteConfigModule } from './app-route-config.module';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/store/effects/auth.effects';



@NgModule({
  declarations: [
    AppComponent,
   // HeaderComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    AuthModule,
    SharedModule,
    ShoppingListModule,
    
    AppRouteConfigModule,
   
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument()
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("app module");
  }
}
