import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-modal-denuncia',
  templateUrl: './modal-denuncia.component.html',
  styleUrls: ['./modal-denuncia.component.scss'],
})
export class ModalDenunciaComponent implements OnInit {

  form: FormGroup;
  private apiURL: string;

  @Input() assedioType: string;

  constructor(public modalController: ModalController, public route: Router) { 
  
  }

  ngOnInit() {

  }

  dismissModal() {
    if (this.modalController) {
      this.modalController.dismiss().then(() => { this.modalController = null; });
    }
  }

  goToDenuncia(){
    this.dismissModal();
    this.route.navigate(['/tabs/tab1']);
  }

}
