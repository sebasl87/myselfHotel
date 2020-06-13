import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChatComponent } from '../chat/chat.component';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(private modal : ModalController, private storage: Storage) { }
  private hayUID: any;

  ngOnInit() {
    this.hayUID = this.storage.get('uid');

  }

  openChat(){
    console.log(this.hayUID);
    // this.modal.create({
    //   component: ChatComponent,
    //   componentProps : {
    //     // chat: chat
    //   }
    // }).then( (modal) => modal.present())
  }
}
