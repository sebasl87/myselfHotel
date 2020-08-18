import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisdatosPageRoutingModule } from './misdatos-routing.module';

import { MisdatosPage } from './misdatos.page';
import { CoreModule } from 'src/app/core/core.module';
import { AvataruserComponent } from 'src/app/core/header/avataruser/avataruser.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { NewAcompComponent } from './components/new-acomp/new-acomp.component';
import { NewAutoComponent } from './components/new-auto/new-auto.component';
import { TranslateModule } from '@ngx-translate/core';
import { ChatComponent } from 'src/app/core/footer/chat/chat.component';
import { LanguageComponent } from 'src/app/core/header/language/language.component';


@NgModule({
  entryComponents: [
    AvataruserComponent,
    UpdateUserComponent,
    NewAcompComponent,
    NewAutoComponent,
    LanguageComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisdatosPageRoutingModule,
    CoreModule,
    TranslateModule.forChild()

  ],
  declarations: [MisdatosPage]
})
export class MisdatosPageModule {}
