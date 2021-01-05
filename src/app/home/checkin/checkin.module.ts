import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CheckinPageRoutingModule } from './checkin-routing.module';
import { CheckinPage } from './checkin.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { AvataruserComponent } from 'src/app/components/avataruser/avataruser.component';
import { TerminosComponent } from 'src/app/components/terminos/terminos.component';
import { IonCustomFormBuilderModule } from 'ion-custom-form-builder';
import { QRCodeModule } from 'angularx-qrcode';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageComponent } from 'src/app/components/language/language.component';


@NgModule({
  entryComponents: [
    AvataruserComponent,
    TerminosComponent,
    LanguageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckinPageRoutingModule,
    ComponentsModule,
    QRCodeModule,
    IonCustomFormBuilderModule.forRoot({ defaultCssClass: 'override-default-form-input' }),
    TranslateModule.forChild()

  ],
  declarations: [CheckinPage]
})
export class CheckinPageModule { }
