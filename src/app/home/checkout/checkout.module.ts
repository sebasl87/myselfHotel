import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutPageRoutingModule } from './checkout-routing.module';

import { CheckoutPage } from './checkout.page';
import { AvataruserComponent } from 'src/app/core/header/avataruser/avataruser.component';
import { SaveBookComponent } from '../misreservas/components/save-book/save-book.component';
import { CoreModule } from 'src/app/core/core.module';
import { TranslateModule } from '@ngx-translate/core';
import { IonCustomFormBuilderModule } from 'ion-custom-form-builder';
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
    CheckoutPageRoutingModule,
    CoreModule,
    IonCustomFormBuilderModule.forRoot({ defaultCssClass: 'override-default-form-input' }),
    TranslateModule.forChild()
  ],
  declarations: [CheckoutPage]
})
export class CheckoutPageModule {}
