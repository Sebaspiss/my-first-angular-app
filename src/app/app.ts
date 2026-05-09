import { Component, OnInit, signal } from '@angular/core';
import { Layout } from './layout/layout';
import { PrimeNG } from 'primeng/config';

@Component({
  selector: 'app-root',
  imports: [Layout],
  template: '<app-layout></app-layout>',
  styleUrl: './app.css'
})

export class App implements OnInit {
  protected readonly title = signal('dashboard-fintech');

  constructor(private primeng: PrimeNG) {}

  ngOnInit(): void {
    this.primeng.ripple.set(true);
  }  
}