
import {Component, computed, inject, signal} from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import {AsyncPipe, JsonPipe} from "@angular/common";
import {TodoItemComponent} from "./components/todo-item/todo-item.component";
import {Todo, TodoListComponent} from "./components/todo-list/todo-list.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    JsonPipe,
    AsyncPipe,
    TodoListComponent,
    RouterOutlet,
  ]
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


