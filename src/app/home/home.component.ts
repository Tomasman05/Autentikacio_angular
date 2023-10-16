import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  newMessage:any
  constructor(private base:BaseService){}
  elkuld(){
    this.base.createMessage(this.newMessage).then(()=>this.newMessage="")
  }
}
