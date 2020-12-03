import { ModalDenunciaComponent } from './../components/modal-denuncia/modal-denuncia.component';
import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  assedioType = [
  {id: 1, nome: "Violência física", descricao: "tal tal tal"},
  {id: 2, nome: "Assédio ou violência moral", descricao: "tal tal tal"},
  {id: 3, nome: "Assédio ou violência sexual", descricao: "tal tal tal"},
  {id: 4, nome: "Assédio verbal", descricao: "tal tal tal"},
  {id: 5, nome: "Assédio psicológico", descricao: "tal tal tal"},
  {id: 6, nome: "Assédio virtual", descricao: "tal tal tal"},
  
  
];

  constructor(public modalController: ModalController) {}
  
  
  async presentModal(id: any) {
    console.log(id);
    const modal = await this.modalController.create({
      component: ModalDenunciaComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        'assedioType': id
      }

      
    });
    return await modal.present();
  }

  dismissModal() {
    if (this.modalController) {
      this.modalController.dismiss().then(() => { this.modalController = null; });
    }
  }

}



