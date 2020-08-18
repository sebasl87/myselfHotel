import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexPageRoutingModule } from './index-routing.module';

import { IndexPage } from './index.page';
import { AvataruserComponent } from 'src/app/core/header/avataruser/avataruser.component';
import { CoreModule } from 'src/app/core/core.module';
import { QrComponent } from '../checkin/components/qr/qr.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageComponent } from 'src/app/core/header/language/language.component';
import { ChatComponent } from 'src/app/core/footer/chat/chat.component';



@NgModule({
  entryComponents: [
    AvataruserComponent,
    QrComponent,
    LanguageComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexPageRoutingModule,
    CoreModule,
    TranslateModule.forChild()

  ],
  declarations: [IndexPage]
})
export class IndexPageModule {}
