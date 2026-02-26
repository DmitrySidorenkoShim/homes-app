import { provideHttpClient } from '@angular/common/http';
import { provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { NavigationError, provideRouter, withNavigationErrorHandler } from '@angular/router';
import routeConfig from './app/routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection(),
    provideHttpClient(),
    provideRouter(
      routeConfig,
      withNavigationErrorHandler((error: NavigationError) => {
        console.error('Navigation failed', error);
      })
    )
  ]
})
  .catch((err: unknown) => console.error(err));
