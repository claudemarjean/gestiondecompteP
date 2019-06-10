import { Component} from "@angular/core";
import { NavController} from "ionic-angular";
import {AddDepenses} from "./AddDepenses/AddDepenses";

@Component({
  selector:'page-depences',
  templateUrl: 'depences.html',
})

export class Depenses {
  constructor(public navCtrl: NavController){

  }

  Ajouter()
  {
    this.navCtrl.push(AddDepenses);
  }

}
