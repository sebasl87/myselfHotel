import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { BookService } from 'src/app/services/book.service';
import { BookI } from 'src/app/interfaces/interfaces';
import { FormField } from 'ion-custom-form-builder';
import { AbstractControl, Validators } from '@angular/forms';
import { CiService } from 'src/app/services/ci.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  constructor(private route: ActivatedRoute, public loadingController: LoadingController, private bookSvc: BookService, private ciSvc: CiService, public alertController: AlertController, private router: Router) {
    this.fields = [
      {
        type: 'number',
        title: 'Numero de Tarjeta',
        formControlName: 'card',
        control: this.card,
        validators: [Validators.required],
        formFieldType: 'card',
        labelPosition: 'stacked'
      },
      {
        icon: 'person',
        type: 'text',
        title: 'Titular',
        formControlName: 'name',
        control: this.name,
        validators: [Validators.required],
        formFieldType: 'inline',
        labelPosition: 'stacked'
      },
      {
        icon: 'calendar',
        type: 'number',
        title: 'Mes de Expiración, ej 02',
        formControlName: 'mes',
        control: this.mes,
        validators: [Validators.required],
        // formFieldType: 'card',
        labelPosition: 'stacked'
      },
      {
        icon: 'calendar',
        type: 'number',
        title: 'Año de Expiración, ej 2023',
        formControlName: 'ano',
        control: this.ano,
        validators: [Validators.required],
        // formFieldType: 'card',
        labelPosition: 'stacked'
      },
      {
        icon: 'card',
        type: 'number',
        title: 'Cod. Seguridad',
        formControlName: 'cod',
        control: this.cod,
        validators: [Validators.required],
        // formFieldType: 'card',
        labelPosition: 'stacked'
      }
    ];
  }

  public books: BookI[];
  public bookCh: BookI = {};
  public idUser: string;
  public total: number;
  public coOp = null;

  fields: FormField[] = [];
  card: AbstractControl;
  name: AbstractControl;
  mes: AbstractControl;
  ano: AbstractControl;
  cod: AbstractControl;
  tarjeta: any = {};
  private encryptedData: string = '';

  public opPagoSel: string = null;
  private rva: any;


  ngOnInit() {
    this.idUser = this.route.snapshot.params['id'];
    this.getDetailsBookCh(this.idUser);
    this.tarjeta = "";

  }
  async getDetailsBookCh(idUser: string) {
    const loading = await this.loadingController.create({
      message: 'Buscando Sus Reservas....'
    });
    await loading.present();

    this.bookSvc.getAllBooksCh(this.idUser).subscribe((books) => {
      this.books = books;

      loading.dismiss();

    })

  }

  mostrarConsumos(id) {
    this.rva = id;
    this.bookSvc.getOneBook(id).subscribe((book) => {
      this.bookCh = book;
      const valores = this.bookCh.consumos;
      this.total = valores.reduce((sum, value) => (sum + value.value), 0).toFixed(2);
    })

  }
  checkValue(event) {
    this.opPagoSel = event.detail.value;

  }

  submitForm(formData) {
    this.tarjeta = formData;
    this.encryptedData = this.ciSvc.encrypt(this.tarjeta);
    this.ciSvc.sendTCCO(this.rva, this.encryptedData);
  }
  opcionesCO() {
    this.coOp = 1;
  }
  async checkOut() {
    if (this.opPagoSel == null) {
      const alert = await this.alertController.create({
        header: 'Confirme una forma de Pago',
        message: 'Por favor seleccione una forma de Pago para poder realizar su Check Out.',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      this.bookSvc.checkOutBook(this.rva, this.opPagoSel);
      this.bookSvc.offcheckBook(this.rva);
      this.router.navigate(['/'])
    }
  }
  // disputar(fecha, item){
  //   ESTO PARA ABRIR EL CHAT CON LOS DATOS!

  // }
}
