import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { providePrimeNG } from 'primeng/config';
import  Aura from '@primeuix/themes/aura';


export const appConfig: ApplicationConfig = {
  providers: [
    // Default Angular
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),

    // Prime NG
    providePrimeNG({
    theme: {
        preset: Aura,
        options: {
          darkModeSelector: 'false'
        }
      }
    })
  ]
}