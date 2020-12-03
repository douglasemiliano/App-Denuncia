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
  @Input() lastName: string;
  @Input() middleInitial: string;

  constructor(public modalController: ModalController) { 
  
  }

  ngOnInit() {

  }

  dismissModal() {
    if (this.modalController) {
      this.modalController.dismiss().then(() => { this.modalController = null; });
    }
  }

}
