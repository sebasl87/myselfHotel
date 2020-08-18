import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { NgForm } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { LanguageComponent } from 'src/app/core/header/language/language.component';
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
      console.log(this.uid);
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
      this.hayUsuario = user.uid;
      if(this.hayUsuario){
        this.router.navigate(['home/index', uid])
      }
    })
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
