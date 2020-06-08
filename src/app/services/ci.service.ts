import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { TarjetaI, BookI } from '../interfaces/interfaces';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root'
})
export class CiService {

  private encryptedData: string = '';
  private secretKey: string = 'vitto2020';

  constructor(private db: AngularFirestore, private bookSvc: BookService) { }

  encrypt(tarjeta){
    return this.encryptedData = CryptoJS.AES.encrypt(JSON.stringify(tarjeta),this.secretKey).toString();

  }
  
  sendTC(rva, dataCard){
    this.db.doc<BookI>(`books/${rva}`).update({
      card: dataCard
    });

    
    // this.bookSvc.getOneBook(rva).subscribe((data)=>{
    //   console.log(data);
      
    // })
    // this.db.collection('cards').add(dataCard);
    // console.log(rva, 'and', dataCard);
    
  }
  sendTCCO(rva, dataCard){
    this.db.doc<BookI>(`books/${rva}`).update({
      cardCO: dataCard
    });
  }
}
