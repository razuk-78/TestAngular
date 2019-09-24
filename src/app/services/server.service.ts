import { Injectable } from '@angular/core';
import { LogIn } from '../objectModels/log-in';
@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor() { }

  //To Do
  logIn(logIn:LogIn):boolean{
    return true; 
  }
  
}
