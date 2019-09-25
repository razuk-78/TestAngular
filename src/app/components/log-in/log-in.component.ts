import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';
import { User } from '../../objectModels/user';
import { ILogIn } from '../../objectModels/ilog-in';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  _logIn:ILogIn;
  constructor(private _server:ServerService ) {
     this._logIn = new User();
    
   }

  ngOnInit() {
  }
  onSignInClick():void{
    this.logIn(this._logIn);
    //ToDo
    // function to log into server
    console.log(this._logIn.userName + " "+ this._logIn.password);
  }
  private logIn(logIn:ILogIn):void{
       if(this._server.logIn(logIn)){
        
       }
      
  }
  rememberMe():void{
  //ToDo
  // som function to save user log in information
  }
}
