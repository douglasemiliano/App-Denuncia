import { ModalDenunciaComponent } from './components/modal-denuncia/modal-denuncia.component';
import { Component } from '@angular/core';

import { Platform, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginComponent } from './components/login/login.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  loginScreen = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private modalController: ModalController
    
  ) {
    this.initializeApp();
    console.log('1', this.loginScreen)
    if(!this.loginScreen){
      this.presentModal();
      this.loginScreen = true;
      console.log('2', this.loginScreen)
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  
  async presentModal() {
    const modal = await this.modalController.create({
      component: LoginComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  dismissModal() {
    if (this.modalController) {
      this.modalController.dismiss().then(() => { this.modalController = null; });
    }
  }


}
