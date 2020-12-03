import { ModalDenunciaComponent } from './modal-denuncia.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [ModalDenunciaComponent],
  entryComponents: [ModalDenunciaComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule
  ]
})
export class ModalDenunciaModule { }
