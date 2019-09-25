import { Injectable } from '@angular/core';
import { ILogIn } from '../objectModels/ilog-in';
import { User } from '../objectModels/user';
@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor() { }

  //To Do
  logIn(logIn: ILogIn): boolean {
    //ToDo
    // call  relevant http service
    return true;
  }

  register(user: User): boolean {
     //ToDo
    // call  relevant http service
    return true;
  }

}
