import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule  } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { Button } from "primeng/button";

@Component({
    selector: 'userInfo',
    templateUrl: './userInfo.html',
    imports: [DividerModule, DatePickerModule, SelectModule, InputTextModule, ReactiveFormsModule, Button]
})

export class UserInfo {
    anagraficaForm!: FormGroup;

  generi = [
    { label: 'Maschio', value: 'M' },
    { label: 'Femmina', value: 'F' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.anagraficaForm = this.fb.group({
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
  }

  onSubmit() {
    if (!this.anagraficaForm.valid) {
      this.anagraficaForm.markAllAsTouched();
    }
  }
}