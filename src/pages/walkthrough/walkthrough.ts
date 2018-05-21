import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-walkthrough',
  templateUrl: 'walkthrough.html',
})
export class WalkthroughPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalkthroughPage');
  }

  playVideo() {
    let video: HTMLMediaElement = <HTMLMediaElement>document.getElementById('wolkthroughVideo')
    video.play();
  }

}
