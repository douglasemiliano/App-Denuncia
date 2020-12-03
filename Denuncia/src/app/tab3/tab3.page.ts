import { ModalDenunciaComponent } from './../components/modal-denuncia/modal-denuncia.component';
import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  url: 'assets\Illustrations\fisica.svg'

  assedioType = [
  {id: 1, nome: "Física", descricao: "A violência ou assédio físico se caracteriza por empurrar, chutar, bater, violentar ou qualquer ação física conta a mulher.", imagem: "assets\\Illustrations\\fisica.svg"},
  {id: 2, nome: "Moral", descricao: "A violência ou o assédio moral se caracteriza por toda e qualquer ato contra a dignidade da mulher, expondo-a à humilhação, calúnias, difamação e outros. ", imagem: "assets\\Illustrations\\moral.svg"},
  {id: 3, nome: "Sexual", descricao: "A caracterização desta violência se dá pelo comportamento indesejado de caráter sexual sem consentimento da mulher, a criação de ambientes intimidativos colocando sua segurança em risco e etc.", imagem: "assets\\Illustrations\\sexual.svg"},
  {id: 4, nome: "Verbal", descricao: "A violência ou o assédio verbal se caracteriza por xingamentos, insultos e exposições da mulher ao ridículo.", imagem: "assets\\Illustrations\\verbal.svg"},
  {id: 5, nome: "Psicológica", descricao: "A violência ou assédio psiciológico se caracteriza por comportamentos agressivos e ofensivos, insistentes e abusivos. Chantagem emocional também é assédio psicológico!", imagem: "assets\\Illustrations\\psicologica.svg"},
  {id: 6, nome: "Virtual", descricao: "A violência ou assédio virtual ocorre online, quando a mulher é ofendida, hostilizada e importunada com mensagens, ameaças, divulgação de dados e informações pessoais e todas as vertentes tóxicas da internet.", imagem: "assets\\Illustrations\\virtual.svg"},
  
  
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



