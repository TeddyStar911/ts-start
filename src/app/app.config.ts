import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { BASE_FEATURE_KEY, baseReducer } from './store/base.reducer';
import { provideEffects } from '@ngrx/effects';
import { BaseEffects } from './store/base.effect';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideStore({ [BASE_FEATURE_KEY]: baseReducer }),
    provideEffects(BaseEffects),
    provideStoreDevtools({
      maxAge: 25,
    }),
  ],
};
