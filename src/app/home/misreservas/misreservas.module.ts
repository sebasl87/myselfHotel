import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MisreservasPageRoutingModule } from './misreservas-routing.module';
import { MisreservasPage } from './misreservas.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { AvataruserComponent } from 'src/app/components/avataruser/avataruser.component';
import { SaveBookComponent } from 'src/app/components/save-book/save-book.component';
import { TranslateModule } from '@ngx-translate/core';

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
    MisreservasPageRoutingModule,
    ComponentsModule,
    TranslateModule.forChild()

  ],
  declarations: [MisreservasPage]
})
export class MisreservasPageModule {}
