import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { SettingsService } from '../../../core/services/settings.service';

@Component({
  selector: 'settings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    RadioButtonModule
  ],
  templateUrl: './settings.html'
})

export class Settings {
  settingsService = inject(SettingsService);

  incrementTransactions() {
    const val = this.settingsService.maxDailyTransactions();
    if (val < 100) {
      this.settingsService.maxDailyTransactions.set(val + 1);
    }
  }

  decrementTransactions() {
    const val = this.settingsService.maxDailyTransactions();
    if (val > 1) {
      this.settingsService.maxDailyTransactions.set(val - 1);
    }
  }
}