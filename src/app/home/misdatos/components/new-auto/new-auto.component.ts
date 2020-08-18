import { Component, OnInit } from '@angular/core';
import { UserI, autoI } from '../../../../interfaces/interfaces'
import { UserService } from 'src/app/core/services/user.service';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-new-auto',
  templateUrl: './new-auto.component.html',
  styleUrls: ['./new-auto.component.scss'],
})
export class NewAutoComponent implements OnInit {

  public user: UserI = {};
  public auto: autoI;
  public mod: string;
  public patente: string;


  constructor(private userSvc: UserService, private navparams: NavParams, private popover: PopoverController) { }

  ngOnInit() {
    this.user = this.navparams.get('user');

  }
  enviarAuto(){
    const auto: autoI = {
      mod: this.mod,
      patente: this.patente
       
    }
    this.userSvc.sendAuto( auto, this.user.uid);
    this.mod="";
    this.patente=""
    this.popover.dismiss();
    
  }
}
