import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';
import { BookService } from 'src/app/services/book.service';
import { BookI } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { QrComponent } from 'src/app/components/qr/qr.component';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  sliders = [
    {
      img: '../../assets/img/slide1.svg'
    },
    {
      img: '../../assets/img/slide2.svg'
    },
    {
      img: '../../assets/img/slide3.svg'
    },
    {
      img: '../../assets/img/slide4.svg'
    },
    {
      img: '../../assets/img/slide5.svg'
    },
    {
      img: '../../assets/img/slide6.svg'
    }
  ];
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    speed: 800,
    zoom: true,
    setWrapperSize: true
  };
  name: string;
  photo: string;
  uid: string;
  booksCH: BookI[] = null;
  booksOUT: BookI[] = null;
  foto: string = null;
  hayUID: any;
  public idUser: string = "";

  public hayUsuario: any;

  collectionRef = this.db.collection<BookI[]>('books').ref;

  constructor(private authSvc: AuthService, private db: AngularFirestore, private storage: Storage, private bookSvc: BookService, private modal: ModalController, private userSvc: UserService, private route: ActivatedRoute) { }

  ngOnInit() {

    if (this.route.snapshot.params['id']) {

      this.uid = this.route.snapshot.params['id'];
      // this.storage.set('uid', this.uid);

      this.bookSvc.bookChecked(this.uid).subscribe(booksch => {
        this.booksCH = booksch
      });

      this.bookSvc.bookOut(this.uid).subscribe(booksch => {
        this.booksOUT = booksch

      });

      // this.userSvc.getOneUser(this.uid).subscribe(user => {
      //   this.foto = user.fotodni;
      // })

    } else {

      this.authSvc.getUserAuth().subscribe(user => {
        this.name = user.displayName;
        this.photo = user.photoURL;
        this.uid = user.uid;


        // this.storage.set('uid', user.uid);

        // if (this.userSvc.getOneUser(this.uid) == null) {
        //   console.log("primera ve");
        // }
      });
    }
  }

  
  mostrarQR(id) {
    this.modal.create({
      component: QrComponent,
      componentProps: {
        id: id
      }
    }).then((modal) => modal.present())

  }

}
