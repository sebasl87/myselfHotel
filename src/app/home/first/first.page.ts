import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { LanguageComponent } from 'src/app/components/language/language.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  public uid: string;
  public hayUsuario: any;

  constructor(private authSvc: AuthService, private userSvc: UserService, private popoverCtrl: PopoverController, private router: Router) { }

  ngOnInit() {
    this.authSvc.getUserAuth().subscribe(user => {
      this.uid = user.uid;
      this.primeraVez(this.uid);
    })
  }

  async openLanguagePopover(ev){
    const popover = await this.popoverCtrl.create({
      component: LanguageComponent,
      event: ev,
      mode: 'ios'
    });
    await popover.present();
  }

  primeraVez(uid) {
    this.userSvc.getOneUser(uid).subscribe(user => {
      this.hayUsuario = user.dni;
      if(this.hayUsuario){
        this.router.navigate(['home/index', uid])
      }
    })
  }

  takePhoto() {

    this.userSvc.updatePhoto(this.uid);
    // Se guarda 1 foto por UID
  }
  
  guardarCambios(userForm: NgForm): void {
    
    this.userSvc.addUser(userForm.value);
    this.uid = userForm.value.uid;
    this.router.navigate(['home/index', this.uid])

    // console.log(userForm.value.uid);
    userForm.resetForm();
    
  }
  salir(){
    this.authSvc.logout();
  }
}
