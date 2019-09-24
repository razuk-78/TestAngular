import { LaborService } from './services/labor.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestAngular';
  constructor(private _labor:LaborService, private _rout:Router){
       _labor.tryJqueryFun();
        this.redirect();
  }

  redirect():void{
    this._rout.navigateByUrl('login');
  }
}
