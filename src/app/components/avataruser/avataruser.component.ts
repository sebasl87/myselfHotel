import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-avataruser',
  templateUrl: './avataruser.component.html',
  styleUrls: ['./avataruser.component.scss'],
})
export class AvataruserComponent implements OnInit {

  items = Array({icon: 'person', label:'Mis Datos', func: '1'}, {icon:'close-circle', label:'Cerrar',func: '2'});
  constructor(private popoverCtrl : PopoverController) { }

  ngOnInit() {}
  

  onClick( valor){
    this.popoverCtrl.dismiss({
      func: valor
    });
  }
}
