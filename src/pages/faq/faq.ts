import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content, Platform } from 'ionic-angular';
import { ApiAiClient } from 'api-ai-javascript';
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
  apiKey: string = "8de38d1c3fef4ab0a18090650489f96e";

  messages: any[]=[];
  text: string = "";
  answer: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public keyboard: Keyboard) {
    this.client = new ApiAiClient({accessToken: this.apiKey});

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

    this.client.textRequest(message).then((response) => {
      this.messages.push({
        text: response.result.fulfillment.speech,
        sender: "COLabot"
      })

      this.content.scrollToBottom(200);
    }).catch((error) => {
      console.log(error)
    })

    this.text = "";

  }
}
