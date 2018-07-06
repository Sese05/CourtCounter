import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WinnerPage } from '../winner/winner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

scoreTeamA=0;
scoreTeamB=0;

  constructor(public navCtrl: NavController) {

  }

 teamA(value:number):void{
this.scoreTeamA +=value;
  }
teamB(value:number):void{
    this.scoreTeamB +=value; 
   }
Rest(value:number):void{
  this.scoreTeamA = value;
  this.scoreTeamB = value;
}
endMatch():void{ 
this.navCtrl.push(WinnerPage)
}
}
