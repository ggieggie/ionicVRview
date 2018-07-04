import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { OverviewPage } from './../overview/overview';
import { CoworkingPage } from './../coworking/coworking';
import { ScopingPage } from './../scoping/scoping';
import { DevelopPage } from './../develop/develop';
import { FaqPage } from './../faq/faq';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  overviewPage = OverviewPage;
  coworkingPage = CoworkingPage;
  scopingPage = ScopingPage;
  developPage = DevelopPage;
  faqPage = FaqPage;

  constructor(public navCtrl: NavController) {

  }

  pageTransition(pageName: string){
    switch(pageName) {
      case 'overview':
        this.navCtrl.push(this.overviewPage);
        break;

      case 'coworking':
        this.navCtrl.push(this.coworkingPage);
        break;

      case 'scoping':
        this.navCtrl.push(this.scopingPage);
        break;

      case 'develop':
        this.navCtrl.push(this.developPage);
        break;

      case 'faq':
        this.navCtrl.push(this.faqPage);
        break;

      default:
        console.log('not found page');
        break;
    }
  }
}
