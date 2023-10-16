import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  user:any
  constructor(private auth:AuthService, private router:Router){
    this.auth.getUser().subscribe((u)=>this.user = u)
  }
  signOut(){
    this.auth.signOut().then(()=>this.router.navigate(["/home"])).catch((hiba)=>console.log(hiba))
  }
}
