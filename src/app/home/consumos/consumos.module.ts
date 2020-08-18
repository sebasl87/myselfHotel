import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsumosPageRoutingModule } from './consumos-routing.module';

import { ConsumosPage } from './consumos.page';
import { AvataruserComponent } from 'src/app/core/header/avataruser/avataruser.component';
import { SaveBookComponent } from '../misreservas/components/save-book/save-book.component';
import { CoreModule } from 'src/app/core/core.module';
import { TranslateModule } from '@ngx-translate/core';
import { ChatComponent } from 'src/app/core/footer/chat/chat.component';
import { LanguageComponent } from 'src/app/core/header/language/language.component';

@NgModule({
  entryComponents: [
    AvataruserComponent,
    SaveBookComponent,
    LanguageComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsumosPageRoutingModule,
    CoreModule,
    TranslateModule.forChild()
  ],
  declarations: [ConsumosPage]
})
export class ConsumosPageModule {}
