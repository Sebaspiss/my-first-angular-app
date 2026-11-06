import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Divider } from 'primeng/divider';
import { DatePicker } from 'primeng/datepicker';
import { Select  } from 'primeng/select';
import { InputText } from 'primeng/inputtext';
import { Button } from "primeng/button";

@Component({
    selector: 'user-info',
    templateUrl: './user-info.html',
    imports: [
      Divider,
      DatePicker,
      Select,
      InputText,
      ReactiveFormsModule,
      Button
    ]
})

export class UserInfo {
  private readonly fb = inject(FormBuilder);

  // TODO: SPOSTARE
  generi = [
    { label: 'Male', value: 'M' },
    { label: 'Female', value: 'F' }
  ];

    readonly anagraficaForm = this.fb.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      dataNascita: [null, Validators.required],
      genere: [null, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: [''],
      via: [''],
      citta: [''],
      cap: [''],
      provincia: ['']
    });

  onSubmit() {
    if (!this.anagraficaForm.valid) {
      this.anagraficaForm.markAllAsTouched();
    }
  }
}