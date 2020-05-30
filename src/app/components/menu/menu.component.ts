import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Componente } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componente[]>;
  uid: string;

  constructor( private dataSvc: DataService, private router: Router, private authSvc: AuthService) { }

  ngOnInit() {
    this.componentes = this.dataSvc.getMenuOpts();
  }
goMisDatos(){
  this.authSvc.getUserAuth().subscribe(user => {
    this.uid = user.uid;
    this.router.navigate(['home/misdatos/', this.uid])

  })
}
goMisReservas(){
  this.authSvc.getUserAuth().subscribe(user => {
    this.uid = user.uid;
    this.router.navigate(['home/misreservas/', this.uid])

  })
}
goCheckIn(){
  this.authSvc.getUserAuth().subscribe(user => {
    this.uid = user.uid;
    this.router.navigate(['home/checkin/', this.uid])

  })
}
}
