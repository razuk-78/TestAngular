import { Injectable } from '@angular/core';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class LaborService {

  constructor() { }
  tryJqueryFun():void{
    console.log(`jQuery version: ${$.fn.jquery}`);
    $('document').ready(()=>{
    $('h1').click(()=>{
      console.log("clicked by using jquery");
     });

    });
  }
}
