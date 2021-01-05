import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPageRoutingModule } from './info-routing.module';

import { InfoPage } from './info.page';
import { AvataruserComponent } from 'src/app/components/avataruser/avataruser.component';
import { SaveBookComponent } from 'src/app/components/save-book/save-book.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';

import { LanguageComponent } from 'src/app/components/language/language.component';

@NgModule({
  entryComponents: [
    AvataruserComponent,
    SaveBookComponent,
    LanguageComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPageRoutingModule,
    ComponentsModule,
    TranslateModule.forChild()
  ],
  declarations: [InfoPage]
})
export class InfoPageModule {}
