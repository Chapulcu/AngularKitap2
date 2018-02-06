
import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { HomePage2 } from './../home2/home2';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab0Root: any = HomePage;
  tab1Root: any = HomePage2;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;

  constructor() {

  }
}
