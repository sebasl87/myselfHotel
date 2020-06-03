import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisdatosPageRoutingModule } from './misdatos-routing.module';

import { MisdatosPage } from './misdatos.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { AvataruserComponent } from 'src/app/components/avataruser/avataruser.component';
import { UpdateUserComponent } from 'src/app/components/update-user/update-user.component';
import { NewAcompComponent } from 'src/app/components/new-acomp/new-acomp.component';
import { NewAutoComponent } from 'src/app/components/new-auto/new-auto.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  entryComponents: [
    AvataruserComponent,
    UpdateUserComponent,
    NewAcompComponent,
    NewAutoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisdatosPageRoutingModule,
    ComponentsModule,
    TranslateModule.forChild()

  ],
  declarations: [MisdatosPage]
})
export class MisdatosPageModule {}
