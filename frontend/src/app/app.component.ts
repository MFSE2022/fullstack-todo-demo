import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AsyncPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [AsyncPipe, RouterOutlet]
})
export class AppComponent {
  auth = inject(AuthService);

  isAuthenticated = this.auth.isAuthenticated$;
  user = this.auth.user$;

  login(): void {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout({
      logoutParams: { returnTo: window.location.origin }
    });
  }
}


