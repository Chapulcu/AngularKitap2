import { Component } from '@angular/core';
import {PostDetail} from '../post-detail/post-detail';
import { NavController} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'home2.html'
})
export class HomePage2 {
	url: string = 'http://sofiatech.net/wp-json/wp/v2/posts?per_page=99&page=2';
	items: any;

	constructor(public navCtrl: NavController, private http: Http, private nav: NavController ) {
	}

	ionViewDidEnter() {

		this.http.get( this.url )
	    .map(res => res.json())
	    .subscribe(data => {
	      // we've got back the raw data, now generate the core schedule data
	      // and save the data for later reference
	      this.items = data;
	    });
	}

	itemTapped(event, item) {
		this.nav.push(PostDetail, {
		  item: item
		});
	}
}