import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';

/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {
  contacts;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService) {
    this.contacts = auth.getAllUsers()
  }

  openContact(contactId) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }

}
