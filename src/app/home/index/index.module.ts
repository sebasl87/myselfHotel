import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexPageRoutingModule } from './index-routing.module';

import { IndexPage } from './index.page';
import { AvataruserComponent } from 'src/app/components/avataruser/avataruser.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { QrComponent } from 'src/app/components/qr/qr.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageComponent } from 'src/app/components/language/language.component';



@NgModule({
  entryComponents: [
    AvataruserComponent,
    QrComponent,
    LanguageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexPageRoutingModule,
    ComponentsModule,
    TranslateModule.forChild()

  ],
  declarations: [IndexPage]
})
export class IndexPageModule {}
