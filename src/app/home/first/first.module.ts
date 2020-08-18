import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstPageRoutingModule } from './first-routing.module';

import { FirstPage } from './first.page';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from 'src/app/core/core.module';
import { LanguageComponent } from 'src/app/core/header/language/language.component';

@NgModule({
  entryComponents: [
    LanguageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstPageRoutingModule,
    TranslateModule.forChild(),
    CoreModule
  ],
  declarations: [FirstPage]
})
export class FirstPageModule {}
