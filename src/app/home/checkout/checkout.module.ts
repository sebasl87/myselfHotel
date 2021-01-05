import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutPageRoutingModule } from './checkout-routing.module';

import { CheckoutPage } from './checkout.page';
import { AvataruserComponent } from 'src/app/components/avataruser/avataruser.component';
import { SaveBookComponent } from 'src/app/components/save-book/save-book.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { IonCustomFormBuilderModule } from 'ion-custom-form-builder';

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
    CheckoutPageRoutingModule,
    ComponentsModule,
    IonCustomFormBuilderModule.forRoot({ defaultCssClass: 'override-default-form-input' }),
    TranslateModule.forChild()
  ],
  declarations: [CheckoutPage]
})
export class CheckoutPageModule {}
