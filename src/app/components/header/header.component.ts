import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PopoverController, MenuController } from '@ionic/angular';
import { AvataruserComponent } from 'src/app/components/avataruser/avataruser.component';
import { Componente } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string;

  componentes: Componente[] = [];
  name: string;
  photo: string;
  uid: string;

  constructor(private authSvc: AuthService, private popoverCtrl: PopoverController, private menuCtrl: MenuController, private router: Router) { }

  ngOnInit() {
    this.authSvc.getUserAuth().subscribe(user => {
      this.name = user.displayName;
      this.photo = user.photoURL;
    })
  }
  toggleMenu() {
    this.menuCtrl.toggle();
  }
  async mostrarPop(evento) {
    const popover = await this.popoverCtrl.create({
      component: AvataruserComponent,
      event: evento,
      mode: 'ios'
    });
    await popover.present();
    const { data } = await popover.onWillDismiss();

    if (data.func == 1) {
      this.authSvc.getUserAuth().subscribe(user => {
        this.uid = user.uid;
        this.router.navigate(['home/misdatos/', this.uid])

      })
      // this.storage.get('uid').then(val => {
      //     this.router.navigate(['home/misdatos/', val])

      // })

    } else {
      this.authSvc.logout();
    }
  }

}
