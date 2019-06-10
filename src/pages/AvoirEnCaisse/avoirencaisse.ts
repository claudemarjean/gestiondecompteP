import {Component}  from "@angular/core";
import {NavController} from "ionic-angular";
import {AddAenC} from "./AddAenC/addaenc";

@Component({
selector:'page-avoirencaisse',
  templateUrl:'avoirencaisse.html',
})

export class Avoirencaisse {
  constructor(public navCtrl: NavController){

  }
  AjouterCaisse(){
  this.navCtrl.push(AddAenC);
  }
}
