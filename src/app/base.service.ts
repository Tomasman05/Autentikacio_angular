import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  refMessage:AngularFireList<Message>
  constructor(private db:AngularFireDatabase) {
    this.refMessage=this.db.list("messages")
  }
  get(){
    return this.refMessage
  }
  createMessage(body:any){
    return this.refMessage.push(body)
  }
}
