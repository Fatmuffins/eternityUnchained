import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

/**
 * Generated class for the CreatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-creator',
  templateUrl: 'creator.html',
})
export class CreatorPage {

  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              public modalCtrl: ModalController) {

  }

  statModal() {
    let modal = this.modalCtrl.create(StatisticsContent);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatorPage');
  }

}

@Component({
  selector: 'statistics-modal',
  templateUrl: 'statistics-content.html',
})
export class StatisticsContent {
  constructor(
    public viewCtrl: ViewController,
    public modalCtrl: ModalController
  ) {}
}
