import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componente[]>;
  uid: string;

  constructor( private router: Router, private authSvc: AuthService) { }

  ngOnInit() {
  }
  goIndex() {
    this.authSvc.getUserAuth().subscribe(user => {
      this.uid = user.uid;
      this.router.navigate(['home/index', this.uid])

    })
  }
  goMisDatos() {
    this.authSvc.getUserAuth().subscribe(user => {
      this.uid = user.uid;
      this.router.navigate(['home/misdatos/', this.uid])

    })
  }
  goMisReservas() {
    this.authSvc.getUserAuth().subscribe(user => {
      this.uid = user.uid;
      this.router.navigate(['home/misreservas/', this.uid])

    })
  }
  goCheckIn() {
    this.authSvc.getUserAuth().subscribe(user => {
      this.uid = user.uid;
      this.router.navigate(['home/checkin/', this.uid])

    })
  }
  goMisConsumos() {
    this.authSvc.getUserAuth().subscribe(user => {
      this.uid = user.uid;
      this.router.navigate(['home/consumos/', this.uid])

    })
  }
  goCheckOut() {
    this.authSvc.getUserAuth().subscribe(user => {
      this.uid = user.uid;
      this.router.navigate(['home/checkout/', this.uid])

    })
  }
}
