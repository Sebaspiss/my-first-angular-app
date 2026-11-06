import { Component, inject } from '@angular/core';
import { Card } from 'primeng/card';
import { RadioButton } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { SettingsService } from '@coreServices/settings.service';

@Component({
  selector: 'settings',
  imports: [
    FormsModule,
    Card,
    RadioButton
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