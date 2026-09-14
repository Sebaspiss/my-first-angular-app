import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'messages',
  standalone: true,
  imports: [CommonModule, CardModule, BadgeModule, DividerModule, DialogModule, ButtonModule],
  templateUrl: './messages.html'
})
export class Messages {
  selectedMessage: any = null;

  data = [
    {
      id: '1',
      title: 'Benvenuto!',
      preview: 'Grazie per esserti registrato alla piattaforma di trading fintech. Siamo entusiasti di averti a bordo.\n\nEsplora la tua dashboard per iniziare ad analizzare il mercato in tempo reale.',
      date: '30/05/2026',
      status: 'nuovo'
    },
    {
      id: '2',
      title: 'Aggiornamento sistema',
      preview: 'Abbiamo rilasciato nuove funzionalità per migliorare la sicurezza e la velocità delle transazioni.\n\nControlla le impostazioni per gestire le notifiche personalizzate.',
      date: '28/05/2026',
      status: 'letto'
    },
    {
      id: '3',
      title: 'Promemoria',
      preview: 'Ricordati di completare il caricamento del tuo documento d\'identità nella sezione anagrafica per sbloccare tutti i limiti operativi dell\'account.',
      date: '25/05/2026',
      status: 'letto'
    }
  ];

  openMessage(msg: any) {
    this.selectedMessage = msg;
    if (msg.status === 'nuovo') {
      msg.status = 'letto';
    }
  }

  closeModal() {
    this.selectedMessage = null;
  }
}