import { Injectable } from '@angular/core';

import { BookI } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksCollection: AngularFirestoreCollection<BookI>;
  private books: Observable<BookI[]>;
  public selectedBook: BookI = {};
  private bookCollection: AngularFirestoreCollection<BookI>;
  private bookDoc: AngularFirestoreDocument<BookI>;
  private book: Observable<BookI>;
  collectionRef = this.db.collection<BookI>('books').ref;

  constructor(private db: AngularFirestore) {
    this.bookCollection = db.collection<BookI>('books');
  }

  getAllBooks(uid) {
    this.booksCollection = this.db.collection<BookI>('books', ref => ref.where("uid", "==", uid).where("card", "==", "not"));
    this.books = this.booksCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    return this.books;

  }

  getAllBooksCh(uid) {
    this.booksCollection = this.db.collection<BookI>('books', ref => ref.where("uid", "==", uid).where("check","==",true));
    this.books = this.booksCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    return this.books;

  }

  getOneBook(idBook: string) {
    this.bookDoc = this.db.doc<BookI>(`books/${idBook}`);
    return this.book = this.bookDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as BookI;
        return data
      }
    }));
  }

  checkBook(rva) {
    this.db.doc<BookI>(`books/${rva}`).update({
      check: true,
      status: 1
    });
  }

  offcheckBook(rva) {
    this.db.doc<BookI>(`books/${rva}`).update({
      check: false,
      status: 0
    });
  }

  checkOutBook(rva, opPago:number) {
    this.db.doc<BookI>(`books/${rva}`).update({
      out: opPago
    });
  }

  updateBook(book: BookI): void {
    let idBook = book.id;
    this.bookDoc = this.db.doc<BookI>(`books/${idBook}`);
    this.bookDoc.update(book);
  }

  addBook(book: BookI) {
    return this.bookCollection.add(book).then((data) => {
      const id = data.id;
      this.bookCollection.doc(id).update({
        id: id
      })
    })
  }

  deleteBook(bookId: string): void {
    this.db.collection('books').doc(bookId).delete();
  }

  bookChecked(uid) {
    this.booksCollection = this.db.collection<BookI>('books', ref => ref.where("uid", "==", uid).where("check", "==", true));
    this.books = this.booksCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    
    return this.books;
  }
  bookOut(uid) {
    this.booksCollection = this.db.collection<BookI>('books', ref => ref.where("uid", "==", uid).where("out", ">", 0));
    this.books = this.booksCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    
    return this.books;
  }
}
