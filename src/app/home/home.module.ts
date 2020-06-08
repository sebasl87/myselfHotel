import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { TranslateModule } from '@ngx-translate/core'; 
import { HomePageRoutingModule } from './home-routing.module';
import { LanguageComponent } from '../components/language/language.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  entryComponents: [
    LanguageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    TranslateModule.forChild(),
    ComponentsModule

  ],
  declarations: [HomePage]
})
export class HomePageModule {}
