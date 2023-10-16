import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user:any
  constructor(private afAuth:AngularFireAuth) { 
    this.getUser().subscribe((u:any)=>this.user = u)
  }
  googleAuth(){
    return this.afAuth.signInWithRedirect(new GoogleAuthProvider())
    
  }
  getUser(){
    return this.afAuth.authState
  }
  signOut(){
    return this.afAuth.signOut()
  }
}
