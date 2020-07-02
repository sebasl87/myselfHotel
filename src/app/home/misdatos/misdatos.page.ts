import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserI } from 'src/app/interfaces/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, PopoverController, LoadingController } from '@ionic/angular';
import { UpdateUserComponent } from '../../components/update-user/update-user.component'
import { NewAcompComponent } from 'src/app/components/new-acomp/new-acomp.component';
import { NewAutoComponent } from 'src/app/components/new-auto/new-auto.component';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-misdatos',
  templateUrl: './misdatos.page.html',
  styleUrls: ['./misdatos.page.scss'],
})
export class MisdatosPage implements OnInit {



  constructor(private userSvc: UserService, private route: ActivatedRoute, private modal: ModalController, private popoverCtrl: PopoverController, public loadingController: LoadingController, private router: Router) { }

  public usuario: any = [];
  public user: UserI = {};
  public idUser: string = "";


  ngOnInit() {

    this.idUser = this.route.snapshot.params['id'];
    this.getDetails(this.idUser);

  }

  async getDetails(idUser: string) {
    const loading = await this.loadingController.create({
      message: 'Cargando Datos....'
    });


    await loading.present();

    this.userSvc.getOneUser(idUser).subscribe(user => {
      this.user = user;
      this.userSvc.selectedAcomp = Object.assign({}, this.user.comp);
    });
    loading.dismiss();
  }


  onPreUpdateUser(user: UserI) {
    this.modal.create({
      component: UpdateUserComponent,
      componentProps: {
        user: this.user,
        id: this.idUser
      }
    }).then((modal) => modal.present())

  }

  async newAcomp(evento) {
    const popover = await this.popoverCtrl.create({
      component: NewAcompComponent,
      event: evento,
      mode: 'ios',
      componentProps: {
        user: this.user
      }
    });
    await popover.present();
  }

  eliminarAcomp(dni) {
    const userAcomp: any = this.user.comp;
    const newAcomp = userAcomp.filter(
      comp => comp.dni !== dni
    )
    this.userSvc.deleteAcomp(newAcomp, this.user.uid);
  }
  
  async newAuto(evento) {
    const popover = await this.popoverCtrl.create({
      component: NewAutoComponent,
      event: evento,
      mode: 'ios',
      componentProps: {
        user: this.user
      }
    });
    await popover.present();
  }
  
  eliminarAuto(patente) {
    const userAuto: any = this.user.auto;
    const newAuto = userAuto.filter(
      auto => auto.patente !== patente
    )
    this.userSvc.deleteAuto(newAuto, this.user.uid);
  }
}
