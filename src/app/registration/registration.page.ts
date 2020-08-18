import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  public email: string;
  public name: string;
  public password: string;

  constructor(private authSvc: AuthService, private router: Router, public alertController: AlertController, private translateSvc: TranslateService) { }

  ngOnInit() { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: this.translateSvc.instant('ALERT.user'),
      subHeader: this.translateSvc.instant('ALERT.usersub'),
      message: this.translateSvc.instant('ALERT.usermsg'),
      buttons: ['OK']
    });

    await alert.present();
  }

  saveNewUser() {
    this.authSvc.onRegister(this.email, this.password, this.name).then(auth => {
      this.presentAlert();
      this.router.navigateByUrl('/');

    }).catch(err => console.log(err))
  }
}