import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './header/menu/menu.component';
import { LanguageComponent } from './header/language/language.component';
import { AvataruserComponent } from './header/avataruser/avataruser.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChatComponent } from './footer/chat/chat.component';
import { AuthService } from './services/auth.service';
import { BookService } from './services/book.service';
import { ChatService } from './services/chat.service';
import { LanguageService } from './services/language.service';
import { CiService } from './services/ci.service';
import { UserService } from './services/user.service';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    MenuComponent,
    LanguageComponent,
    AvataruserComponent,
    HeaderComponent,
    FooterComponent,
    ChatComponent
  ],
  exports: [
    MenuComponent,
    LanguageComponent,
    AvataruserComponent,
    HeaderComponent,
    FooterComponent,
    ChatComponent,
    AuthService,
    BookService,
    ChatService,
    LanguageService,
    CiService,
    UserService
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
  ]
})
export class CoreModule { }
