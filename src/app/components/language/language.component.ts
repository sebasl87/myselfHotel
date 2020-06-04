import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit {

  languages = [];
  selected = '';

  constructor(private popoverCtrl: PopoverController, private languageSvc: LanguageService) { }

  ngOnInit() {

    this.languages = this.languageSvc.getLanguages();
    this.selected = this.languageSvc.selected;
  }

  select(lng){
    this.languageSvc.setLanguage(lng);
    this.popoverCtrl.dismiss();
  }
}
