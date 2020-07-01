import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PopoverController } from '@ionic/angular';
import { LanguageComponent } from '../components/language/language.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userData: any;

  constructor(private authSvc: AuthService, public afAuth: AngularFireAuth, private router: Router, private popoverCtrl: PopoverController) { }

  async openLanguagePopover(ev){
    const popover = await this.popoverCtrl.create({
      component: LanguageComponent,
      event: ev,
      mode: 'ios'
    });
    await popover.present();
  }
  // onLoginGoogle(): void {
  //   this.authSvc.onLoginGoogle()
  //     .then(res => {
  //       this.router.navigateByUrl('home/index');
  //     }).catch(err => alert(err))
  // }

  onLoginFB() {
    this.authSvc.onLoginFB()
      .then(res => {
        this.router.navigateByUrl('home/first');
      }).catch(err => alert(err))
  }

}
