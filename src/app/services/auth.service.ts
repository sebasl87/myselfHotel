import { Injectable } from '@angular/core';

import { User } from '../shared/user.class';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase';

import { AngularFirestore } from '@angular/fire/firestore';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx'
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Platform } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: any = false;
  constructor(public afAuth: AngularFireAuth, private router: Router, private db: AngularFirestore, private google: GooglePlus, private fb: Facebook, public platform: Platform) {
    afAuth.authState.subscribe(user => (this.isLogged = user));
  }

  //REGISTRARSE

  onRegister(email, password, name) {
    return new Promise((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(email, password).then(res => {
        const uid = res.user.uid;
        this.db.collection('user').doc(uid).set({
          name: name,
          uid: uid
        })
        resolve(res);

      }).catch(err => reject(err))
    })
  }


  //LOGUEARSE

  onLogin(user: User) {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(user.email, user.password).then(user => {
        resolve(user);
      }).catch(err => reject(err));
    });
  }

  onLoginFB() {
    if (this.platform.is('cordova')) {
      return this.fb.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
        const credential_fb = auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
        return this.afAuth.signInWithCredential(credential_fb);
      })
    } else {
      return this.afAuth.signInWithPopup(new auth.FacebookAuthProvider());
    }
  }

  onLoginGoogle() {
    if (this.platform.is('cordova')) {
      return this.google.login({}).then(result => {
        const user_data_google = result;
        return this.afAuth.signInWithCredential(auth.GoogleAuthProvider.credential(null, user_data_google.accessToken));
      })
    } else {
      return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider);
    }
  }

  //DATOS USER HOME

  getUserAuth(){
    return this.afAuth.authState
  }
  
  //LOGOUT

  logout() {
    this.afAuth.signOut().then(() => {
      this.google.disconnect();
      this.fb.logout();
      this.router.navigateByUrl('/');
    })
  }

  //RESET PASS

  resetPassword(email: string) {
    return this.afAuth.sendPasswordResetEmail(email);
  }
}
