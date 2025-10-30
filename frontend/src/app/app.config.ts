// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAuth0, authHttpInterceptorFn } from '@auth0/auth0-angular';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { environment } from '../environments/environment.auto';
// @ts-ignore

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authHttpInterceptorFn])),

    provideAuth0({
      domain: environment.auth0.domain,
      clientId: environment.auth0.clientId,
      authorizationParams: {
        audience: environment.auth0.audience,
        redirect_uri: window.location.origin,
        scope: 'openid profile email'
      },
      httpInterceptor: {
        allowedList: [
          { uri: 'http://localhost:8080/api/*' },
          { uri: 'https://fullstack-todo-demo.onrender.com/*' },
        ],
      },
      // Optional: cacheLocation: 'localstorage'
    }),
  ],
};
