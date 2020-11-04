import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-modal-denuncia',
  templateUrl: './modal-denuncia.component.html',
  styleUrls: ['./modal-denuncia.component.scss'],
})
export class ModalDenunciaComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  dismissModal() {
    if (this.modalController) {
      this.modalController.dismiss().then(() => { this.modalController = null; });
    }
  }

}
