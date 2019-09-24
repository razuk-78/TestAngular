import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';
import { LogIn } from '../../objectModels/log-in';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  _logIn:LogIn;
  constructor(private _server:ServerService ) {
     this._logIn = new LogIn();
    
   }

  ngOnInit() {
  }
  onSignInClick():void{
    this.logIn(this._logIn);
    //test username password
    console.log(this._logIn.userName + " "+ this._logIn.password);
  }
  private logIn(logIn:LogIn):void{
       if(this._server.logIn(logIn)){
        
       }
  }
}
