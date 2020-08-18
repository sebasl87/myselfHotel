import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MisreservasPageRoutingModule } from './misreservas-routing.module';
import { MisreservasPage } from './misreservas.page';
import { CoreModule } from 'src/app/core/core.module';
import { AvataruserComponent } from 'src/app/core/header/avataruser/avataruser.component';
import { SaveBookComponent } from './components/save-book/save-book.component';
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
    MisreservasPageRoutingModule,
    CoreModule,
    TranslateModule.forChild()

  ],
  declarations: [MisreservasPage]
})
export class MisreservasPageModule {}
