import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  newMessage:any
  messages:any
  constructor(private base:BaseService){
    this.base.get().snapshotChanges().pipe(
      map(ch=>ch.map(c=>({key: c.payload.key, ...c.payload.val()})))
    ).subscribe((uzenetek)=>this.messages=uzenetek)
  }
  elkuld(){
    let body:any = {}
    body.committer = "Én vagyok !"
    body.message=this.newMessage
    this.base.createMessage(body).then(()=>this.newMessage="")
  }
}
