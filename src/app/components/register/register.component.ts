import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/objectModels/user';
import { ServerService } from 'src/app/services/server.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  constructor(private _server: ServerService) {
    this.user=new User();
   }

  ngOnInit() {
  }
  register(): void {
    if(this.user.userName && this.user.emailAddress && this.user.password){

      if(this._server.register(this.user)){
        //ToDo:
        //redirect to some component
        console.log("register succeed")
      }
    }
      
    else
      alert("please fill the user fields");
  }
}
