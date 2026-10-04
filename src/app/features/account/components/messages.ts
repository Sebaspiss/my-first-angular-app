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
      title: 'Welcome!',
      preview: 'Thank you for registering on our fintech trading platform. We are excited to have you on board.\n\nExplore your dashboard to start analyzing the market in real time.',
      date: '05/30/2026',
      status: 'new'
    },
    {
      id: '2',
      title: 'System Update',
      preview: 'We have released new features to improve transaction security and speed.\n\nCheck your settings to manage customized notifications.',
      date: '05/28/2026',
      status: 'read'
    },
    {
      id: '3',
      title: 'Reminder',
      preview: 'Remember to complete uploading your identity document in the profile section to unlock all account trading limits.',
      date: '05/25/2026',
      status: 'read'
    }
  ];
  
  get hasSelectedMessage(): boolean {
    return this.selectedMessage !== null;
  }

  get isNewMessage(): boolean {
    return this.selectedMessage?.status === 'new';
  }

  get isReadMessage(): boolean {
    return this.selectedMessage?.status === 'read';
  }

  messageSeverity(status: string): any {
    return status === 'new' ? 'danger' : 'success';
  }

  openMessage(msg: any) {
    this.selectedMessage = msg;
    if (msg.status === 'new') {
      msg.status = 'read';
    }
  }

  closeModal() {
    this.selectedMessage = null;
  }
}