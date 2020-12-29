import { Injectable } from "@angular/core";

import { User } from "../../../shared/user.class";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { auth } from "firebase/app";

import { AngularFirestore } from "@angular/fire/firestore";
// import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx'

import { Platform } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { UserService } from "./user.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public isLogged: any = false;
  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private db: AngularFirestore,
    // private fb: Facebook,
    public platform: Platform,
    private storage: Storage,
    private userSvc: UserService
  ) {
    afAuth.authState.subscribe((user) => (this.isLogged = user));
  }

  //REGISTRARSE

  onRegister(email, password, name) {
    return new Promise((resolve, reject) => {
      this.afAuth
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          const uid = res.user.uid;
          this.db.collection("user").doc(uid).set({
            name: name,
            uid: uid,
          });
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  }

  //LOGUEARSE

  onLogin(user: User) {
    return new Promise((resolve, reject) => {
      this.afAuth
        .signInWithEmailAndPassword(user.email, user.password)
        .then((user) => {
          resolve(user);
        })
        .catch((err) => reject(err));
    });
  }

  // onLoginFB() {
  //   if (this.platform.is('cordova')) {
  //     return this.fb.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
  //       const credential_fb = auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
  //       return this.afAuth.signInWithCredential(credential_fb);
  //     })
  //   } else {
  //     return this.afAuth.signInWithPopup(new auth.FacebookAuthProvider());
  //   }
  // }

  createFirebaseuser(appleResponse) {
    // Create a custom OAuth provider
    const provider = new auth.OAuthProvider("apple.com");

    // Create sign in credentials with our token
    const credential = provider.credential({
      idToken: appleResponse.identityToken,
    });

    // Call the sign in with our created credentials
    // const userCredential = await
    return this.afAuth.signInWithCredential(credential);
    // console.log(userCredential)
    // Update the user document in Firestore
    // this.userSvc.addUserIos(userCredential.user);
    // this.updateUserData(userCredential.user, appleResponse.givenName, appleResponse.familyName);
  }

  //DATOS USER HOME

  getUserAuth() {
    return this.afAuth.authState;
  }

  //LOGOUT

  logout() {
    this.afAuth.signOut().then(() => {
      // this.fb.logout();
      this.storage.clear();
      this.router.navigateByUrl("/");
    });
  }

  //RESET PASS

  resetPassword(email: string) {
    return this.afAuth.sendPasswordResetEmail(email);
  }
}
