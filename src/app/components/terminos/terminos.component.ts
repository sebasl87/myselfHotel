import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.component.html',
  styleUrls: ['./terminos.component.scss'],
})
export class TerminosComponent implements OnInit {

  constructor(private modal: ModalController) { }

  ngOnInit() {}

  closeModal() {
    this.modal.dismiss();
  }
}
