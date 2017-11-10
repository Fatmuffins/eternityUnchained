import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreatorPage } from '../creator/creator'

@Component({
  selector: 'page-characters',
  templateUrl: 'characters.html'
})
export class CharacterPage {

  constructor(public navCtrl: NavController) {

  }

  push() {
    this.navCtrl.push(CreatorPage);
  }

}

