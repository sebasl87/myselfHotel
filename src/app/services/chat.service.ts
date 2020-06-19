import { Injectable } from '@angular/core';
import { message } from "../interfaces/interfaces";
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private db : AngularFirestore) { }

  getChatRoom( uid : string){
    return this.db.collection('chat', ref => ref.where("uid", "==", uid)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const room = a.payload.doc.data();
          const id = a.payload.doc.id;          
           return { id, room };
        });
      })
    );

  }
  
  sendMsgToFirebase( message : message, uid : string){
    this.db.collection('chat').doc(uid).update({
      chat : firestore.FieldValue.arrayUnion(message)
    })
  }
}
