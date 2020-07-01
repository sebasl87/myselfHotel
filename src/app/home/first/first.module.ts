import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstPageRoutingModule } from './first-routing.module';

import { FirstPage } from './first.page';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from 'src/app/components/components.module';
import { LanguageComponent } from 'src/app/components/language/language.component';

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
    ComponentsModule
  ],
  declarations: [FirstPage]
})
export class FirstPageModule {}
