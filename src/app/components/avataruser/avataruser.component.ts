import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-avataruser',
  templateUrl: './avataruser.component.html',
  styleUrls: ['./avataruser.component.scss'],
})
export class AvataruserComponent implements OnInit {

  constructor(private popoverCtrl : PopoverController) { }

  ngOnInit() {}
  

  onClick(valor){
    this.popoverCtrl.dismiss({
      func: valor
    });
  }
}
