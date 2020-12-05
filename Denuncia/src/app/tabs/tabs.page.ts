import { ModalDenunciaComponent } from './../components/modal-denuncia/modal-denuncia.component';
import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../components/login/login.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  home: boolean;

  constructor(public modalController: ModalController, public route: Router
            ) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalDenunciaComponent,
      componentProps: {
        id: 1
      }

    });
    return await modal.present();
  }

  dismissModal() {
    if (this.modalController) {
      this.modalController.dismiss().then(() => { this.modalController = null; });
    }
  }

  goToDenuncia(){
    this.route.navigate(['/tabs/tab1']);
    this.home = false;
  }
  goToHome(){
    this.route.navigate(['/tabs/tab2']);
    this.home = true;
  }

  setHomeTrue(){
    this.home = true;
  }

  setHomeFalse(){
    this.home = false;
  }

  async presentModalLogout() {
    const modal = await this.modalController.create({
      component: LoginComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }


}