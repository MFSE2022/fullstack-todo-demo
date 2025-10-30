import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component')
      .then(m => m.HomeComponent)
  },
  {
    path: 'add-todo',
    loadComponent: () => import('./pages/add-todo/add-todo.component')
      .then(m => m.AddTodoComponent)
  },
  {
    path: 'edit-todo/:id',
    loadComponent: () => import('./pages/edit-todo/edit-todo.component')
      .then(m => m.EditTodoComponent)
  }
];
