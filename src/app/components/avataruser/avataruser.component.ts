import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LanguageComponent } from '../language/language.component';

@Component({
  selector: 'app-avataruser',
  templateUrl: './avataruser.component.html',
  styleUrls: ['./avataruser.component.scss'],
})
export class AvataruserComponent implements OnInit {

  constructor(private popoverCtrl : PopoverController) { }

  ngOnInit() {}
  
  async openLanguagePopover(ev){
    const popover = await this.popoverCtrl.create({
      component: LanguageComponent,
      event: ev,
      mode: 'ios'
    });
    await popover.present();
  }
  
  onClick(valor){
    this.popoverCtrl.dismiss({
      func: valor
    });
  }
}
