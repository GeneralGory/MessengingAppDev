import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;


@Injectable()
export class AuthService {
	private user: firebase.User;

	constructor(public afAuth: AngularFireAuth) {
		afAuth.authState.subscribe(user => {
			this.user = user;
		});
	}

	getAllUsers() {
		return firebase.database().ref('users')
							.once("value")
                            .then(snapshot => snapshot.val())    
                            .then(users => console.log(users))
	}

	signInWithEmail(credentials) {
		console.log('Sign in with email');
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
	}

	signUp(credentials) {
		return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password).then
		(function(user) {
			user.user.updateProfile(
				{ displayName: credentials.username, photoURL: null}
			)
		  })
		
	}
	
	signOut(): Promise<void> {
		return this.afAuth.auth.signOut();
	}
	
	get authenticated(): boolean {
		return this.afAuth.authState != null
	}

	getEmail() {
		return this.user && this.user.email;
	}
}