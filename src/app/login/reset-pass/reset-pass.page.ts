import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.page.html',
  styleUrls: ['./reset-pass.page.scss'],
})
export class ResetPassPage implements OnInit {

  public email:string = "";
  constructor(private authSvc : AuthService, public alertController: AlertController, private router : Router) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Correo enviado.',
      subHeader: 'Se te ha enviado un email a la casilla',
      message: 'Por favor compruebe restablezca su password y vuelva a ingresar.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async notmail() {
    const alert = await this.alertController.create({
      header: 'Complete su correo electronico',
      message: 'Por favor complete su correo para enviarle el link para modificar su pass.',
      buttons: ['OK']
    });

    await alert.present();
  }
  sendLinkReset(){
    this.authSvc.resetPassword(this.email).then(()=>{
      this.presentAlert();
      this.router.navigateByUrl('home/index');

    }).catch(()=>{
      this.notmail();
    })
  }
}
