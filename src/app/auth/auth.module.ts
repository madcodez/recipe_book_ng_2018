import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';  

import { AuthRouteConfig } from "./auth-route-config.module";

import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";


@NgModule({

    declarations :[SignupComponent,SigninComponent],
    imports : [CommonModule,FormsModule,AuthRouteConfig]
})
export class AuthModule {

}