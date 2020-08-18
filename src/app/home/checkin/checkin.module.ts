import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CheckinPageRoutingModule } from './checkin-routing.module';
import { CheckinPage } from './checkin.page';
import { CoreModule } from 'src/app/core/core.module';
import { AvataruserComponent } from 'src/app/core/header/avataruser/avataruser.component';
import { TerminosComponent } from './components/terminos/terminos.component';
import { IonCustomFormBuilderModule } from 'ion-custom-form-builder';
import { QRCodeModule } from 'angularx-qrcode';
import { TranslateModule } from '@ngx-translate/core';
import { ChatComponent } from 'src/app/core/footer/chat/chat.component';
import { LanguageComponent } from 'src/app/core/header/language/language.component';


@NgModule({
  entryComponents: [
    AvataruserComponent,
    TerminosComponent,
    LanguageComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckinPageRoutingModule,
    CoreModule,
    QRCodeModule,
    IonCustomFormBuilderModule.forRoot({ defaultCssClass: 'override-default-form-input' }),
    TranslateModule.forChild()

  ],
  declarations: [CheckinPage]
})
export class CheckinPageModule { }
