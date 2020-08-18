import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { PopoverController } from '@ionic/angular';
import { LanguageComponent } from '../core/header/language/language.component';
import { AlertController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';

const { Device, SignInWithApple } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userData: any;
  showAppleSignIn = false;
  user = null;

  constructor(private authSvc: AuthService, public afAuth: AngularFireAuth, private router: Router, private popoverCtrl: PopoverController, private alertController: AlertController) { }

  async ngOnInit() {

    const device = await Device.getInfo();
    this.showAppleSignIn = device.platform === 'ios';
  }

  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login Failed',
      message: 'Please try again later',
      buttons: ['OK'],
    });
    await alert.present();
  }
  
  async openLanguagePopover(ev) {
    const popover = await this.popoverCtrl.create({
      component: LanguageComponent,
      event: ev,
      mode: 'ios'
    });
    await popover.present();
  }
<<<<<<< HEAD

  openAppleSignIn() {
    SignInWithApple.Authorize()
      .then(async (res) => {
        if (res.response && res.response.identityToken) {
          this.authSvc.createFirebaseuser(res.response).then(res => {
            this.router.navigateByUrl('home/first');
          }).catch(err => alert(err))
          // this.router.navigateByUrl('home/first');
        } else {
          this.presentAlert();
        }
      })
      .catch((response) => {
        this.presentAlert();
      });
  }
=======
>>>>>>> feature/scalable

  onLoginFB() {
    this.authSvc.onLoginFB()
      .then(res => {
        this.router.navigateByUrl('home/first');
      }).catch(err => alert(err))
  }

}
