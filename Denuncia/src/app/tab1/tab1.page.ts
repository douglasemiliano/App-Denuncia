import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  form: FormGroup;
  private apiURL: string;

  constructor(private fb: FormBuilder,private http: HttpClient, public toastController: ToastController) { 
    this.apiURL = 'http://localhost:8080/denuncias'
  }

  ngOnInit() {
    this.createForm();
  }

  createForm(){ this.form = this.fb.group({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    assediotype: new FormControl('', [Validators.required]),
    local: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    incontact: new FormControl('', [Validators.required]),
  });
}
onSubmit() {
  console.log(JSON.stringify(this.form.value));
  this.createDenuncia(this.form.value);
  }

  public createDenuncia(denuncia){
    this.http.post(this.apiURL, denuncia)
    .subscribe(
      resultado => {
        this.presentToastSucess();
      },
      erro => {
        if(erro.status == 500) {
          console.log(erro);
          this.presentToast();
        }
      }
    );
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Sua denuncia não pode ser finalizada, revise as informações e tente novamente.',
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }

  async presentToastSucess() {
    const toast = await this.toastController.create({
      message: 'Moça, sua denuncia foi realizada com sucesso. Não se preocupe, tudo vai dar certo!',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}