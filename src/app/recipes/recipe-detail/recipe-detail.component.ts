import { Component, OnInit, Input } from '@angular/core';
import {Recipe } from '../recipe.modal';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe : Recipe ; 
  index : number ;
  
  constructor(private recpieService : RecipeService , private route : ActivatedRoute, private router : Router, private authService : AuthService ) {
    
   }
     
  ngOnInit() {
   
    this.route.params.subscribe((params : Params)=>
                                  {
                                  this.index = +params['id'];
                                  this.recipe = this.recpieService.getRecipe(this.index) ;
                                  }
                              );
    
  
  }
  addtoShoppinglist(){
    
    this.recpieService.addIngtoShopList(this.recipe.ingredients);

  }
  onDeleteRecipe(){
    this.recpieService.deleteRecipe(this.index);
    this.router.navigate(['../'],{relativeTo:this.route});
  }
  onEditRecipe(){
   // this.router.navigate(['edit',{relativeTo : this.route}]);
   this.router.navigate(['../',this.index,'edit'],{relativeTo : this.route});
  }
}
