import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ModalController, AlertController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { UserI, BookI } from 'src/app/interfaces/interfaces';
import { BookService } from 'src/app/services/book.service';
import { TerminosComponent } from 'src/app/components/terminos/terminos.component';
import { FormField } from 'ion-custom-form-builder';
import { AbstractControl, Validators } from '@angular/forms';
import { CiService } from 'src/app/services/ci.service';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.page.html',
  styleUrls: ['./checkin.page.scss'],
})
export class CheckinPage implements OnInit {

  fields: FormField[] = [];
  card: AbstractControl;
  name: AbstractControl;
  mes: AbstractControl;
  ano: AbstractControl;
  cod: AbstractControl;
  tarjeta: any = {};
  private encryptedData: string = '';

  public user: UserI = {};
  public books: BookI[];
  public bookCh: BookI = {};

  private Dch: any;
  private rva: any;
  private Tch: any;

  public QRCI: string = null;


  constructor(private route: ActivatedRoute, public loadingController: LoadingController, private userSvc: UserService, private bookSvc: BookService, private modal: ModalController, private ciSvc: CiService, public alertController: AlertController, private router: Router, private translateSvc: TranslateService) {
    //Formulario de Tarjeta:
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



  ngOnInit() {
    const idUser = this.route.snapshot.params['id'];
    this.getDetails(idUser);
    this.tarjeta = "";
  }

  async getDetails(idUser: string) {
    const loading = await this.loadingController.create({
      message: 'Cargando Sus Datos....'
    });
    await loading.present();

    this.userSvc.getOneUser(idUser).subscribe(user => {
      this.user = user;
      this.userSvc.selectedAcomp = Object.assign({}, this.user.comp);
    });
    this.bookSvc.getAllBooks(idUser).subscribe((books) => {
      this.books = books;
      loading.dismiss();

    })
  }
  takePhoto() {
    this.userSvc.updatePhoto(this.user.uid);
    // Se guarda 1 foto por UID
  }
  term() {
    this.modal.create({
      component: TerminosComponent
    }).then((modal) => modal.present())
  }

  datosCh(Dch) {
    this.Dch = Dch;

  }
  rvaCh(rva) {
    this.rva = rva

  }
  termCh(Tch) {
    this.Tch = Tch

  }
  submitForm(formData) {
    this.tarjeta = formData;
    this.encryptedData = this.ciSvc.encrypt(this.tarjeta);
  }

  async goCheckIn() {
    if (this.user.fotodni == null) {
      const alert = await this.alertController.create({
        header: this.translateSvc.instant('ALERT.dni'),
        message: this.translateSvc.instant('INDEX.xfafoto'),
        buttons: ['OK']
      });
      await alert.present();

    } else if (this.Dch == null) {
      const alert = await this.alertController.create({
        header: this.translateSvc.instant('ALERT.datos'),
        message: this.translateSvc.instant('ALERT.datosmsg'),
        buttons: ['OK']
      });

      await alert.present();
    } else if (this.rva == null) {
      const alert = await this.alertController.create({
        header: this.translateSvc.instant('ALERT.rva'),
        message: this.translateSvc.instant('ALERT.rvamsg'),
        buttons: ['OK']
      });

      await alert.present();
    } else if (this.Tch == null) {
      const alert = await this.alertController.create({
        header: this.translateSvc.instant('ALERT.term'),
        message: this.translateSvc.instant('ALERT.termmsg'),
        buttons: ['OK']
      });

      await alert.present();
    } else if (this.tarjeta == "") {
      const alert = await this.alertController.create({
        header: this.translateSvc.instant('ALERT.tc'),
        message: this.translateSvc.instant('ALERT.tcmsg'),
        buttons: ['OK']
      });

      await alert.present();
    } else {
      this.ciSvc.sendTC(this.rva, this.encryptedData);
      this.bookSvc.checkBook(this.rva);
      this.QRCI = "La reserva esta checkeada";
      this.bookSvc.getOneBook(this.rva).subscribe((book) => {
        this.bookCh = book;
      })
      // this.router.navigate(['/'])

    }
  }

  reCI() {
    this.bookSvc.offcheckBook(this.rva);
    this.QRCI = null;

  }

}
