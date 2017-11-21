import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatorPage, StatisticsContent } from './creator';

@NgModule({
  declarations: [
    CreatorPage,
    StatisticsContent,
  ],
  imports: [
    IonicPageModule.forChild(CreatorPage),
  ],
  entryComponents: [
    CreatorPage,
    StatisticsContent,
  ]
})
export class CreatorPageModule {
  constructor() {}

}
