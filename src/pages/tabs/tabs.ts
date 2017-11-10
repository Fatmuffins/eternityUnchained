import { Component } from '@angular/core';

import {HomePage} from '../home/home';
import {CharacterPage} from "../characters/characters";
import {JournalPage} from "../journal/journal";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CharacterPage;
  tab3Root = JournalPage;

  constructor() {

  }
}
