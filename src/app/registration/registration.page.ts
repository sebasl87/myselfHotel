import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../shared/user.class';
import { auth } from 'firebase';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  public email: string;
  public name: string;
  public password: string;

  constructor(private authSvc: AuthService, private router: Router, public alertController: AlertController) { }

  ngOnInit() { }

  async presentAlert() {
    // const alert = await this.alertController.create({
    //   header: 'Usuario creado.',
    //   subHeader: 'Ingresar ahora',
    //   message: 'Por favor ingresar con sus nuevos datos.',
    //   buttons: ['OK']
    // });

    // await alert.present();
  }

  saveNewUser() {
    this.authSvc.onRegister(this.email, this.password, this.name).then(auth => {
      this.presentAlert();
      this.router.navigateByUrl('home/index');

    }).catch(err => console.log(err))
    //HACER LAS COMPROBACIONES DE MAIL y PASS
  }
}