import { Component, OnInit } from '@angular/core';
import { UserI, acompI } from '../../../../interfaces/interfaces'
import { UserService } from 'src/app/core/services/user.service';
import { NavParams, PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-new-acomp',
  templateUrl: './new-acomp.component.html',
  styleUrls: ['./new-acomp.component.scss'],
})
export class NewAcompComponent implements OnInit {

  public user: UserI = {};
  public acomp: acompI;
  public name: string;
  public dni: number;
  public date: string;
  

  constructor(private userSvc: UserService, private navparams: NavParams, private popover: PopoverController) { }

  ngOnInit() {
    this.user = this.navparams.get('user');

  }

  enviarAcomp(){
    const acomp: acompI = {
      name: this.name,
      dni: this.dni,
      date: this.date
       
    }
    this.userSvc.sendAcomp( acomp, this.user.uid);
    this.name = "";
    this.dni = null;
    this.date = "";

    this.popover.dismiss();
    
  }
}
