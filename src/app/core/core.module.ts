import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/datastorage.service';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/authguard.service';
import { AppRouteConfigModule } from '../app-route-config.module';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AppRouteConfigModule,
    SharedModule,
  ],
  declarations: [HomeComponent, HeaderComponent,PagenotfoundComponent],
  exports :[HeaderComponent,AppRouteConfigModule],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard],
})
export class CoreModule { }
