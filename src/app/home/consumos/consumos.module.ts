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

@NgModule({
  entryComponents: [
    AvataruserComponent,
    SaveBookComponent
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
