import { Injectable } from '@angular/core';
import { message } from "../interfaces/interfaces";
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private db : AngularFirestore) { }

  getChatRoom( uid : string){
    return this.db.collection('user').doc(uid).valueChanges();
  }

  sendMsgToFirebase( message : message, uid : string){
    this.db.collection('user').doc(uid).update({
      chat : firestore.FieldValue.arrayUnion(message)
    })
  }
}
