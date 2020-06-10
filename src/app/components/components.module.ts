import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvataruserComponent } from './avataruser/avataruser.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { FormsModule } from '@angular/forms';
import { NewAcompComponent } from './new-acomp/new-acomp.component';
import { NewAutoComponent } from './new-auto/new-auto.component';
import { SaveBookComponent } from './save-book/save-book.component';
import { TerminosComponent } from './terminos/terminos.component';
import { QrComponent } from './qr/qr.component';
import { QRCodeModule } from 'angularx-qrcode';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageComponent } from './language/language.component';
import { FooterComponent } from './footer/footer.component';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    AvataruserComponent,
    MenuComponent,
    HeaderComponent,
    UpdateUserComponent,
    NewAcompComponent,
    NewAutoComponent,
    SaveBookComponent,
    TerminosComponent,
    QrComponent,
    LanguageComponent,
    FooterComponent,
    ChatComponent

  ],
  exports: [
    AvataruserComponent,
    MenuComponent,
    HeaderComponent,
    UpdateUserComponent,
    NewAcompComponent,
    NewAutoComponent,
    SaveBookComponent,
    TerminosComponent,
    QrComponent,
    LanguageComponent,
    FooterComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule,
    QRCodeModule,
    TranslateModule.forChild()

  ]
})
export class ComponentsModule { }
