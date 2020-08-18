import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/core/services/book.service';
import { NavParams, ModalController } from '@ionic/angular';
import { BookI } from 'src/app/interfaces/interfaces';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-save-book',
  templateUrl: './save-book.component.html',
  styleUrls: ['./save-book.component.scss'],
})
export class SaveBookComponent implements OnInit {

  constructor(private bookSvc: BookService, private navparams: NavParams, private modal: ModalController) { }

  public book: BookI = {};
  public idUser: string;


  ngOnInit() {
    this.idUser = this.navparams.get('uid');
  }

  guardarCambios(): void {
    this.book = {
      tit: this.book.tit,
      pnr: this.book.pnr,
      ota: this.book.ota,
      ci: firebase.firestore.Timestamp.fromDate(new Date(this.book.ci)),
      co: firebase.firestore.Timestamp.fromDate(new Date(this.book.co)),
      uid: this.idUser,
      check: false,
      card: 'not'
    }
    this.bookSvc.addBook(this.book).then(() => {
      this.modal.dismiss();

    })
  }
  closeModal() {
    this.modal.dismiss();
  }
}
