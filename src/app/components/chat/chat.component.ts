import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from "@ionic/angular";
import { message } from "../../interfaces/interfaces";
import { ChatService } from "../../services/chat.service";
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  public chat: any;

  public user: any;

  public messages = [];

  public msg: string;

  public room: any;


  constructor(
    private navparams: NavParams,
    private modal: ModalController,
    private chatSvc: ChatService,
    private db: AngularFirestore
  ) { }

  ngOnInit() {
    this.user = this.navparams.get('user');
    const mensaje1: message = {
      content: "Muchas gracias por elegirnos!!",
      type: 'text',
      date: new Date(),
      hotel: true
    }
    this.chatSvc.getChatRoom(this.user).subscribe(room => {
      
      if (room.length == 0) {
        this.db.collection('chat').add({
          uid: this.user
        }).then((chatRef) => {
          this.chat = chatRef.id;
          this.chatSvc.sendMsgToFirebase(mensaje1, chatRef.id);
        })
      } else {
        this.room = room[0];
        this.chat = this.room.id;
        
      }
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
