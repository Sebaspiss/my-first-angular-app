import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { SelectButtonModule } from 'primeng/selectbutton';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

interface Language {
  code: string;
  label: string;
}

interface Currency {
  code: string;
  label: string;
}

@Component({
  selector: 'settings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    SelectButtonModule,
    RadioButtonModule,
    ToggleButtonModule,
    InputNumberModule,
    ButtonModule
  ],
  template: `
    <div class="space-y-6">
      <p-card header="Impostazioni Applicazione">
        <div class="space-y-4">

          <!-- Lingua -->
          <div>
            <label class="block mb-1 font-medium">Lingua</label>
            <p-selectButton
              [(ngModel)]="data.language"
              [options]="languages"
              optionLabel="label"
              class="w-full">
            </p-selectButton>
          </div>

          <!-- Valuta -->
          <div>
            <label class="block mb-1 font-medium">Valuta</label>
            <p-selectButton
              [(ngModel)]="data.currency"
              [options]="currencies"
              optionLabel="label"
              class="w-full">
            </p-selectButton>
          </div>

          <!-- Formato orario -->
          <div>
            <label class="block mb-1 font-medium">Formato Orario</label>
            <div class="flex gap-4">
              @for (option of timeFormats; track option) {
                <p-radiobutton
                  [value]="option"
                  [(ngModel)]="data.timeFormat"
                  optionlabel="option">
                </p-radiobutton>
              }
            </div>
          </div>

          <!-- Notifiche email -->
          <div class="flex items-center gap-3">
            <label class="font-medium">Notifiche via Email</label>
            <p-toggleButton
              [(ngModel)]="data.emailNotifications"
              onLabel="Attive"
              offLabel="Disattive">
            </p-toggleButton>
          </div>

          <!-- Limite transazioni giornaliere -->
          <div>
            <label class="block mb-1 font-medium">Numero massimo transazioni giornaliere</label>
            <p-inputNumber
              [(ngModel)]="data.maxDailyTransactions"
              [min]="1"
              [max]="100"
              [showButtons]="true"
              class="w-32">
            </p-inputNumber>
          </div>

          <div class="flex justify-end mt-4">
            <button pButton label="Salva Impostazioni" class="p-button-success"></button>
          </div>

        </div>
      </p-card>
    </div>
  `
})
export class Settings {

  languages: Language[] = [
    { code: 'it', label: 'Italiano' },
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' }
  ];

  currencies: Currency[] = [
    { code: 'EUR', label: 'Euro (€)' },
    { code: 'USD', label: 'US Dollar ($)' },
    { code: 'GBP', label: 'British Pound (£)' }
  ];

  timeFormats: string[] = ['12h', '24h'];

  data = {
    language: this.languages[0],
    currency: this.currencies[0],
    timeFormat: '24h',
    emailNotifications: true,
    maxDailyTransactions: 20
  };
}