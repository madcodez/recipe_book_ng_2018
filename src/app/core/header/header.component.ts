import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { DataStorageService} from '../../shared/datastorage.service'
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  


  constructor( private dataStoreService : DataStorageService ,private authService : AuthService, private router : Router) {

   }
   


  ngOnInit() {
  }

  onSave(){
    this.dataStoreService.storeRecipes().subscribe((response)=> console.log(response));

  }
  onFetch(){
    this.dataStoreService.getRecipes();
  }
  onSignout(){
    this.authService.onSignout();
    this.router.navigate(['/recipes']);
  }

}
