import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, ToastController } from "@ionic/angular";
import { UserI } from 'src/app/interfaces/interfaces';
import { UserService } from 'src/app/core/services/user.service';
import { NgForm } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit {
  public user: UserI = {};
  public id: any;

  constructor(private navparams: NavParams, private modal: ModalController, public userSvc: UserService, private camera: Camera, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.user = this.navparams.get('user');
    
    this.userSvc.selectedUser = Object.assign({}, this.user);

  }
  takePhoto() {

    this.userSvc.updatePhoto(this.user.uid);
    // Se guarda 1 foto por UID
  }
  guardarCambios(userForm: NgForm): void {
    
    this.userSvc.updateUser(userForm.value);
    userForm.resetForm();
    this.modal.dismiss();
  }
  closeModal() {
    this.modal.dismiss();
  }
}
