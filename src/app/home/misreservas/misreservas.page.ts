import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { BookI } from 'src/app/interfaces/interfaces';
import { ModalController, LoadingController } from '@ionic/angular';
import { SaveBookComponent } from 'src/app/components/save-book/save-book.component';

@Component({
  selector: 'app-misreservas',
  templateUrl: './misreservas.page.html',
  styleUrls: ['./misreservas.page.scss'],
})
export class MisreservasPage implements OnInit {

  constructor(private route: ActivatedRoute, private bookSvc: BookService, private modal: ModalController, public loadingController: LoadingController) { }
  
  
  public books: BookI[];
  public book: BookI = {};
  public idUser: string;

  ngOnInit() {
    this.idUser = this.route.snapshot.params['id'];
    this.getDetailsBook(this.idUser);


  }
  async getDetailsBook(idUser: string) {
    const loading = await this.loadingController.create({
      message: 'Buscando Sus Reservas....'
    });
    await loading.present();

    this.bookSvc.getAllBooks(this.idUser).subscribe((books) => {
      this.books = books;
      loading.dismiss();

    })

  }

  eliminarRva(rvaId: string): void {
    this.bookSvc.deleteBook(rvaId);

  }

  // modificarRva(book: BookI) {
  //   this.bookSvc.getOneBook(book.id).subscribe((book) => {
  //     this.book = book;
  //     this.modal.create({
  //       component: SaveBookComponent,
  //       componentProps: {
  //         book: this.book
  //       }
  //     }).then((modal) => modal.present())
  //   })

  // }

  nuevaRva() {
    // console.log(this.idUser);

    this.modal.create({
      component: SaveBookComponent,
      componentProps: {
        uid: this.idUser
      }
    }).then((modal) => modal.present())
  }

}
