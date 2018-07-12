import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
}

export const firebaseConfig = {
	fire: {
		apiKey: "AIzaSyBhhxstEqLTCEWXnqI4JGiv-Gzp05sXu4g",
		authDomain: "messaging-app-9f0ae.firebaseapp.com",
		databaseURL: "https://messaging-app-9f0ae.firebaseio.com",
		projectId: "messaging-app-9f0ae",
		storageBucket: "messaging-app-9f0ae.appspot.com",
		messagingSenderId: "636887711012"
	}
}