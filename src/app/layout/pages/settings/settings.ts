import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton';
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
    RadioButtonModule,
    ButtonModule
  ],
  template: `
    <div class="space-y-6">
      <!-- Page Title -->
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
          <i class="pi pi-cog text-xl"></i>
        </div>
        <div>
          <h2 class="text-xl font-bold text-gray-900">Impostazioni Applicazione</h2>
          <p class="text-sm text-gray-500">Personalizza l'esperienza d'uso della tua piattaforma di trading</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <!-- Column 1: Localizzazione & Preferenze -->
        <div class="space-y-6">
          <p-card styleClass="border border-blue-600 shadow-sm">
            <ng-template #header>
              <div class="flex items-center gap-2 p-4 border-b border-gray-100 bg-gray-50">
                <i class="pi pi-globe text-blue-500 text-lg"></i>
                <div class="flex flex-col">
                  <span class="font-bold text-gray-800 text-base">Localizzazione & Valuta</span>
                  <span class="text-xs text-gray-500">Imposta la lingua e la valuta predefinita di visualizzazione</span>
                </div>
              </div>
            </ng-template>

            <div class="space-y-5 mt-4">
              <!-- Lingua -->
              <div class="space-y-2">
                <label class="block text-sm font-semibold text-gray-700">Lingua Piattaforma</label>
                <div class="grid grid-cols-3 gap-3">
                  @for (lang of languages; track lang.code) {
                    <div 
                      class="flex flex-col items-center justify-center p-3 border rounded-lg cursor-pointer transition text-center hover:bg-gray-50"
                      [class.border-blue-500]="data.language.code === lang.code"
                      [class.bg-blue-50/20]="data.language.code === lang.code"
                      [class.border-gray-200]="data.language.code !== lang.code"
                      (click)="data.language = lang"
                    >
                      <span class="text-sm font-semibold text-gray-800">{{ lang.label }}</span>
                      <span class="text-xs text-gray-400 uppercase font-mono font-medium">{{ lang.code }}</span>
                    </div>
                  }
                </div>
              </div>

              <!-- Valuta -->
              <div class="space-y-2">
                <label class="block text-sm font-semibold text-gray-700">Valuta di Riferimento</label>
                <div class="grid grid-cols-3 gap-3">
                  @for (curr of currencies; track curr.code) {
                    <div 
                      class="flex flex-col items-center justify-center p-3 border rounded-lg cursor-pointer transition text-center hover:bg-gray-50"
                      [class.border-blue-500]="data.currency.code === curr.code"
                      [class.bg-blue-50/20]="data.currency.code === curr.code"
                      [class.border-gray-200]="data.currency.code !== curr.code"
                      (click)="data.currency = curr"
                    >
                      <span class="text-sm font-semibold text-gray-800">{{ curr.label }}</span>
                      <span class="text-xs text-gray-400 uppercase font-mono font-medium">{{ curr.code }}</span>
                    </div>
                  }
                </div>
              </div>
            </div>
          </p-card>

          <p-card styleClass="border border-blue-600 shadow-sm">
            <ng-template #header>
              <div class="flex items-center gap-2 p-4 border-b border-gray-100 bg-gray-50">
                <i class="pi pi-clock text-blue-500 text-lg"></i>
                <div class="flex flex-col">
                  <span class="font-bold text-gray-800 text-base">Formato Orario</span>
                  <span class="text-xs text-gray-500">Seleziona come visualizzare l'ora nei grafici e transazioni</span>
                </div>
              </div>
            </ng-template>

            <div class="space-y-3 mt-4">
              <div 
                class="flex items-center gap-3 border rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition" 
                [class.border-blue-500]="data.timeFormat === '12h'"
                [class.bg-blue-50/20]="data.timeFormat === '12h'"
                [class.border-gray-200]="data.timeFormat !== '12h'"
                (click)="data.timeFormat = '12h'"
              >
                <p-radiobutton
                  value="12h"
                  [(ngModel)]="data.timeFormat"
                  (click)="$event.stopPropagation()">
                </p-radiobutton>
                <div class="flex flex-col">
                  <span class="text-sm font-semibold text-gray-800">Formato 12 ore (AM/PM)</span>
                  <span class="text-xs text-gray-500">Es. 02:30 PM, 09:15 AM</span>
                </div>
              </div>

              <div 
                class="flex items-center gap-3 border rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition" 
                [class.border-blue-500]="data.timeFormat === '24h'"
                [class.bg-blue-50/20]="data.timeFormat === '24h'"
                [class.border-gray-200]="data.timeFormat !== '24h'"
                (click)="data.timeFormat = '24h'"
              >
                <p-radiobutton
                  value="24h"
                  [(ngModel)]="data.timeFormat"
                  (click)="$event.stopPropagation()">
                </p-radiobutton>
                <div class="flex flex-col">
                  <span class="text-sm font-semibold text-gray-800">Formato 24 ore</span>
                  <span class="text-xs text-gray-500">Es. 14:30, 09:15</span>
                </div>
              </div>
            </div>
          </p-card>
        </div>

        <!-- Column 2: Sicurezza & Limiti -->
        <div class="space-y-6">
          <p-card styleClass="border border-blue-600 shadow-sm">
            <ng-template #header>
              <div class="flex items-center gap-2 p-4 border-b border-gray-100 bg-gray-50">
                <i class="pi pi-shield text-blue-500 text-lg"></i>
                <div class="flex flex-col">
                  <span class="font-bold text-gray-800 text-base">Sicurezza & Notifiche</span>
                  <span class="text-xs text-gray-500">Configura gli avvisi di sicurezza e le email</span>
                </div>
              </div>
            </ng-template>

            <div class="space-y-5 mt-4">
              <!-- Notifiche email -->
              <div class="space-y-2">
                <label class="block text-sm font-semibold text-gray-700">Notifiche Email</label>
                <div class="grid grid-cols-2 gap-3">
                  <div 
                    class="flex flex-col items-center justify-center p-3 border rounded-lg cursor-pointer transition text-center hover:bg-gray-50"
                    [class.border-blue-500]="data.emailNotifications === true"
                    [class.bg-blue-50/20]="data.emailNotifications === true"
                    [class.border-gray-200]="data.emailNotifications !== true"
                    (click)="data.emailNotifications = true"
                  >
                    <span class="text-sm font-semibold text-gray-800 font-semibold">Attive</span>
                    <span class="text-xs text-gray-400 font-medium">Ricevi avvisi email</span>
                  </div>
                  <div 
                    class="flex flex-col items-center justify-center p-3 border rounded-lg cursor-pointer transition text-center hover:bg-gray-50"
                    [class.border-blue-500]="data.emailNotifications === false"
                    [class.bg-blue-50/20]="data.emailNotifications === false"
                    [class.border-gray-200]="data.emailNotifications !== false"
                    (click)="data.emailNotifications = false"
                  >
                    <span class="text-sm font-semibold text-gray-800 font-semibold">Disattive</span>
                    <span class="text-xs text-gray-400 font-medium">Nessun avviso email</span>
                  </div>
                </div>
              </div>

              <!-- Limite transazioni giornaliere -->
              <div class="space-y-2 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                <div class="flex flex-col gap-0.5 mb-2">
                  <span class="text-sm font-semibold text-gray-800">Limite Transazioni Giornaliere</span>
                  <span class="text-xs text-gray-500">Imposta una soglia massima giornaliera di operazioni autorizzate</span>
                </div>
                <div class="flex items-center gap-4">
                  <!-- Custom counter with spin buttons on the right -->
                  <div class="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden w-36">
                    <input 
                      type="text" 
                      class="w-full text-left px-3 py-2 text-sm focus:outline-none bg-transparent text-gray-900 border-none"
                      [value]="data.maxDailyTransactions"
                      readonly
                    />
                    <div class="flex flex-col border-l border-gray-200">
                      <button 
                        class="px-2 py-0.5 hover:bg-gray-100 flex items-center justify-center text-gray-500 border-b border-gray-200 text-[10px] cursor-pointer"
                        (click)="incrementTransactions()"
                      >
                        <i class="pi pi-chevron-up"></i>
                      </button>
                      <button 
                        class="px-2 py-0.5 hover:bg-gray-100 flex items-center justify-center text-gray-500 text-[10px] cursor-pointer"
                        (click)="decrementTransactions()"
                      >
                        <i class="pi pi-chevron-down"></i>
                      </button>
                    </div>
                  </div>
                  <span class="text-xs text-blue-600 font-semibold bg-blue-50 px-2 py-1 rounded">Consigliato: 20</span>
                </div>
              </div>
            </div>
          </p-card>
        </div>

      </div>

      <!-- Action Button -->
      <div class="flex justify-center mt-10">
        <p-button
          label="Salva Impostazioni"
          icon="pi pi-check"
          severity="primary"
          styleClass="w-full md:w-64 py-2.5 text-sm font-semibold shadow-md">
        </p-button>
      </div>
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

  incrementTransactions() {
    if (this.data.maxDailyTransactions < 100) {
      this.data.maxDailyTransactions++;
    }
  }

  decrementTransactions() {
    if (this.data.maxDailyTransactions > 1) {
      this.data.maxDailyTransactions--;
    }
  }
}