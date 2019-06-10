import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Totaldescomptespage} from "../pages/Totaldescompte/totaldescomptes";
import {Avoirencaisse} from "../pages/AvoirEnCaisse/avoirencaisse";
import {Empreintes} from "../pages/Empreintes/empreintes";
import {Depenses} from "../pages/Depences/depences";
import {AddDepenses} from "../pages/Depences/AddDepenses/AddDepenses";
import {AddAenC} from "../pages/AvoirEnCaisse/AddAenC/addaenc";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Totaldescomptespage,
    Avoirencaisse,
    Empreintes,
    Depenses,
    AddDepenses,
    AddAenC
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Totaldescomptespage,
    Avoirencaisse,
    Empreintes,
    Depenses,
    AddDepenses,
    AddAenC
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
