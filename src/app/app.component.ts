import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';

import { App, MenuController, Nav, Platform } from 'ionic-angular';
import { ComponentsListPage } from '../pages/components/list/components.list.page';

import { HomePage } from '../pages/home/home.page';
import { SlideBoxPage } from '../pages/slide-box/slide-box.page';
import { WordpressListPage } from '../pages/wordpress/list/wordpress.list.page';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth.service';
import { ContactsPage } from '../pages/contacts/contacts';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	pages;
	rootPage;

	@ViewChild(Nav) nav: Nav;

	constructor(
		private app: App,
		private platform: Platform,
		private menu: MenuController,
		private statusBar: StatusBar,
		private auth: AuthService
	) {
		this.initializeApp();

		// set our app's pages
		this.pages = [
			{ title: 'Home', component: HomePage, icon: 'home' },
			{ title: 'Contacts', component: ContactsPage, icon: 'albums'},
			{ title: 'Slides', component: SlideBoxPage, icon: 'swap' },
			{ title: 'Components', component: ComponentsListPage, icon: 'grid' }
		];

		this.rootPage = LoginPage;
	}

	initializeApp() {
		this.rootPage = LoginPage;

		//this.platform.ready().then(() => {
		//	this.statusBar.styleDefault();
		//});

		this.auth.afAuth.authState
			.subscribe(
			user => {
				if (user) {
				this.rootPage = HomePage;
				} else {
				this.rootPage = LoginPage;
				}
			},
			() => {
				this.rootPage = LoginPage;
			}
		);
	}

	openPage(page) {
		this.menu.close();
		this.nav.setRoot(page.component);
	}

	logout() {
		this.menu.close();
		this.auth.signOut();
		this.nav.setRoot(HomePage);
	}
}
