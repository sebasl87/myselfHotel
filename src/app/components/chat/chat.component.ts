import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from "@ionic/angular";
import { message } from "../../interfaces/interfaces";
import { ChatService } from "../../services/chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  public chat: any;

  public messages = [];

  public msg: string;

  public room: any;


  constructor(
    private navparams: NavParams,
    private modal: ModalController,
    private chatSvc: ChatService
  ) { }

  ngOnInit() {
    this.chat = this.navparams.get('user');

    this.chatSvc.getChatRoom(this.chat).subscribe(room => {
      this.room = room;
    })

  }

  closeChat() {
    this.modal.dismiss()
  }

  sendMessage() {

    const mensaje: message = {
      content: this.msg,
      type: 'text',
      date: new Date(),
      hotel: false
    }

    this.chatSvc.sendMsgToFirebase(mensaje, this.chat);
    this.msg = "";
  }
}
