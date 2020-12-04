import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginComponent {

  encapsulation: ViewEncapsulation.None
  form: FormGroup;
  private apiURL: string;

  constructor(private fb: FormBuilder,private http: HttpClient, public route: Router, public toastController: ToastController, public modalController: ModalController) { 
    this.apiURL = 'http://localhost:8080/denuncias'
  }

  ngOnInit() {
    this.createForm();
  }

  createForm(){ this.form = this.fb.group({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
}
onSubmit() {
  console.log(JSON.stringify(this.form.value));
  this.presentToast();
  this.dismissModal();
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Login realizado com sucesso!',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  dismissModal() {
    if (this.modalController) {
      this.modalController.dismiss().then(() => { this.modalController = null; });
    }
  }

  goToDenuncia(){
    this.dismissModal();
    this.route.navigate(['/tabs/tab2']);
  }

}