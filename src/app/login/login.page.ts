import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';

import { User } from '../../shared/user.class';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User = new User;

  constructor(private authSvc: AuthService, private router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error al Login',
      subHeader: 'Usuario incorrecto o inexistente',
      message: 'Por favor compruebe sus datos ó registrese para ingresar.',
      buttons: ['OK']
    });

    await alert.present();
  }

  userLogin(){
    this.authSvc.onLogin(this.user)
    .then(res=>{
      this.router.navigateByUrl('home/first');
    }).catch(err => this.presentAlert())
  }
  


}
