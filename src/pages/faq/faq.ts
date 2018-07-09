import { Component, ViewChild } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { NavController, NavParams, Content, Platform } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';

/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html'
})
export class FaqPage {

  @ViewChild(Content) content: Content;
  client: any;

  messages: any[]=[];
  text: string = "";
  answer: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public keyboard: Keyboard, public http: Http) {

    this.messages.push({
      text: "こんにちは、COLabotです。COLabについて分からない事があったら聞いてね♪",
      sender: "COLabot"
    });

    this.platform.ready().then(() => {
      if(this.platform.is('ios')) {
        this.keyboard.hideKeyboardAccessoryBar(true)
      }
    });
  }

  sendText(){
    let message = this.text;

    if(!message) return;

    this.messages.push({
      text: message,
      sender: "user"
    });
    this.content.scrollToBottom(200);
    this.text = "";

    let body = {
      "lang": "ja",
      "query": message,
      "sessionId": "837110d9-aafb-cb29-102b-e03c6e2a0244",
      "timezone": "Asia/Tokyo"
    };
    let headers = new Headers({'Authorization': 'Bearer 8de38d1c3fef4ab0a18090650489f96e', 'Content-Type': 'application/json;charset=utf-8'});
    let options = new RequestOptions({ headers: headers});

    return this.http.post('https://api.dialogflow.com/v1/query?v=20170712',  body, options)
      .subscribe(res => {
        var body = JSON.parse(res["_body"]);
        this.messages.push({
          text: body.result.fulfillment.speech,
          sender: "COLabot"
        })
      }, error => {
        console.log(JSON.stringify(error));
      });
  }
}
