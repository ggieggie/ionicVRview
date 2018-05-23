import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { OverviewPage } from '../pages/overview/overview';
import { CoworkingPage } from '../pages/coworking/coworking';
import { ScopingPage } from '../pages/scoping/scoping';
import { DevelopPage } from '../pages/develop/develop';
import { WalkthroughPage } from '../pages/walkthrough/walkthrough';
import { FaqPage } from '../pages/faq/faq';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OverviewPage,
    CoworkingPage,
    ScopingPage,
    DevelopPage,
    WalkthroughPage,
    FaqPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OverviewPage,
    CoworkingPage,
    ScopingPage,
    DevelopPage,
    WalkthroughPage,
    FaqPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
