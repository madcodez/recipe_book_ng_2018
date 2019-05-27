import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import {reducer} from "./store"

@NgModule({
    declarations :[ ShoppingListComponent , ShoppingEditComponent],
    exports :[],
    imports:[CommonModule,FormsModule]
})

export class ShoppingListModule {

}