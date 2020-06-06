import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { BookService } from 'src/app/services/book.service';
import { BookI } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-consumos',
  templateUrl: './consumos.page.html',
  styleUrls: ['./consumos.page.scss'],
})
export class ConsumosPage implements OnInit {

  constructor( private route: ActivatedRoute, public loadingController: LoadingController, private bookSvc: BookService) { }
  
  public books: BookI[];
  public bookCh: BookI = {};
  public idUser: string;


  ngOnInit() {
    this.idUser = this.route.snapshot.params['id'];
    this.getDetailsBookCh(this.idUser);


  }
  async getDetailsBookCh(idUser: string) {
    const loading = await this.loadingController.create({
      message: 'Buscando Sus Reservas....'
    });
    await loading.present();

    this.bookSvc.getAllBooksCh(this.idUser).subscribe((books) => {
      this.books = books;

      if(books.length == 1){
        
        let id = books[0].id
        this.bookSvc.getOneBook(id).subscribe((book)=>{
          this.bookCh = book;
        })
      }

      loading.dismiss();

    })

  }

  mostrarConsumos(id){
    this.bookSvc.getOneBook(id).subscribe((book)=>{
      this.bookCh = book;
    })
    
  }

  // disputar(fecha, item){
  //   ESTO PARA ABRIR EL CHAT CON LOS DATOS!
    
  // }
}
