import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { NavParams, ModalController } from '@ionic/angular';
import { BookI } from 'src/app/interfaces/interfaces';
import { NgForm } from '@angular/forms';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { formatDate } from '@angular/common';
import * as firebase from 'firebase';

@Component({
  selector: 'app-save-book',
  templateUrl: './save-book.component.html',
  styleUrls: ['./save-book.component.scss'],
})
export class SaveBookComponent implements OnInit {

  constructor(private bookSvc: BookService, private navparams: NavParams, private modal: ModalController) { }

  public book: BookI = {};
  public idUser: string;

  // private  pnr: string;
  // private  ota: string;
  // private  ci: any;
  // private  co: any;
  // private uid: string;


  ngOnInit() {
    this.idUser = this.navparams.get('uid');
    // console.log(this.idUser);
    
    // this.book = this.navparams.get('book');

    // this.bookSvc.selectedBook = Object.assign({}, this.book);

  }

  guardarCambios(): void {
    this.book ={
      tit: this.book.tit,
      pnr: this.book.pnr,
      ota: this.book.ota,
      ci: firebase.firestore.Timestamp.fromDate(new Date(this.book.ci)),
      co: firebase.firestore.Timestamp.fromDate(new Date(this.book.co)),
      uid: this.idUser,
      check: false
    }
    this.bookSvc.addBook(this.book).then(()=>{
      this.modal.dismiss();
      
    })
    // this.bookSvc.updateBook(bookForm.value);
    // bookForm.resetForm();
    // console.log(this.book);
    
  }
  closeModal() {
    this.modal.dismiss();
  }
}
