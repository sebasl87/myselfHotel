import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/core/services/book.service';
import { BookI } from 'src/app/interfaces/interfaces';
import { ModalController, LoadingController } from '@ionic/angular';
import { SaveBookComponent } from './components/save-book/save-book.component';

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

  nuevaRva() {

    this.modal.create({
      component: SaveBookComponent,
      componentProps: {
        uid: this.idUser
      }
    }).then((modal) => modal.present())
  }

}
