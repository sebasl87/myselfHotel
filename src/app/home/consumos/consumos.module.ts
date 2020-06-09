import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsumosPageRoutingModule } from './consumos-routing.module';

import { ConsumosPage } from './consumos.page';
import { AvataruserComponent } from 'src/app/components/avataruser/avataruser.component';
import { SaveBookComponent } from 'src/app/components/save-book/save-book.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { ChatComponent } from 'src/app/components/chat/chat.component';
import { LanguageComponent } from 'src/app/components/language/language.component';

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
    ComponentsModule,
    TranslateModule.forChild()
  ],
  declarations: [ConsumosPage]
})
export class ConsumosPageModule {}
