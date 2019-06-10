import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Totaldescomptespage} from "../Totaldescompte/totaldescomptes";
import {Avoirencaisse} from "../AvoirEnCaisse/avoirencaisse";
import {Empreintes} from "../Empreintes/empreintes";
import {Depenses} from "../Depences/depences";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onLoadtotaldescomptes()
  {
    this.navCtrl.push(Totaldescomptespage);

  }
  onLoadAvoirEnCaisse()
  {
    this.navCtrl.push(Avoirencaisse);
  }
  onLoadEmpreintes()
  {
    this.navCtrl.push(Empreintes);
  }

  onLoadDepenses()
  {
    this.navCtrl.push(Depenses);
  }

}
