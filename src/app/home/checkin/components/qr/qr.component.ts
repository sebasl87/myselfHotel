import { Component, OnInit } from '@angular/core';
import { NavParams, LoadingController, ModalController } from '@ionic/angular';
import { BookService } from '../../../../core/services/book.service';
import { BookI } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss'],
})
export class QrComponent implements OnInit {

  public id: string;
  public bookCh: BookI = {};
  public QRCI: string = "Reserva Chequeada Correctamente";

  constructor(private navparams: NavParams, public loadingController: LoadingController, private bookSvc: BookService, private modal: ModalController) { }

  ngOnInit() {
    this.id = this.navparams.get('id');
    this.getDetails(this.id);

  }
  async getDetails(idBook: string) {
    const loading = await this.loadingController.create({
      message: 'Cargando Sus Datos....'
    });
    await loading.present();
    this.bookSvc.getOneBook(idBook).subscribe(rva=>{
      this.bookCh = rva;
      loading.dismiss();
      
    })
  }
  closeModal() {
    this.modal.dismiss();
  }
}
