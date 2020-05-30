import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userData: any;

  constructor(private authSvc: AuthService, public afAuth: AngularFireAuth, private router: Router) { }

  onLoginGoogle(): void {
    this.authSvc.onLoginGoogle()
      .then(res => {
        this.router.navigateByUrl('home/index');
      }).catch(err => alert(err))
  }

  onLoginFB() {
    this.authSvc.onLoginFB()
      .then(res => {
        this.router.navigateByUrl('home/index');
      }).catch(err => alert(err))
  }

}
