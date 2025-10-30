import {Component, computed, inject, signal} from '@angular/core';
import {Todo, TodoListComponent} from "../../components/todo-list/todo-list.component";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {AuthService} from "@auth0/auth0-angular";
import {Router} from "@angular/router";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-home',
  imports: [
    AsyncPipe,
    JsonPipe,
    TodoListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  router=inject(Router);
  auth = inject(AuthService);
  todoService = new TodoService();
  user = this.auth.user$;
  todos = signal<Todo[]>([])
  today = new Date().toISOString().split('T')[0];
  countCompleted = computed(() =>
    this.todos().filter(todo => todo.completed).length
  );

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getAllTodos().subscribe({
      next: (todos) => {
        this.todos.set(todos);
        console.log(todos);
      },
      error: (err) => console.error(err)
    });
  }

  dailyTodos = computed(() =>
    this.todos().filter(todo => {
      if (!todo.completed && todo.dueDate) {
        const todoDate = todo.dueDate.split('T')[0];
        return todoDate === this.today;
      }
      return false;
    })
  );

  otherTodos = computed(() =>
    this.todos().filter(todo => {
      if (todo.completed) return false;

      if (!todo.dueDate) return true;

      const todoDate = todo.dueDate.split('T')[0];
      return todoDate !== this.today;
    })
  )

  completedTodos = computed(()=>
    this.todos().filter(todo => todo.completed)
  )

  toggleTodo(id: number) {
    const todo = this.todos().find(t => t.id === id);
    if (!todo) return;

    this.todos.update(todos =>
      todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    )

    this.todoService.updateTodo(id, { ...todo, completed: !todo.completed }).subscribe({
      next: (updatedTodo) => {
        console.log(updatedTodo);
        this.todos.update(todos =>
          todos.map(t => t.id === id ? updatedTodo : t)
        );
      },
      error: (err) => {
        this.todos.update(todos =>
          todos.map(t => t.id === id ? todo : t)
        );
      }
    });

  }
  navigateToAddTodo() {
    this.router.navigate(['/add-todo']);
  }

  removeTodo(id: number) {
    const todo = this.todos().find(t => t.id === id);
    if (!todo) return;

    this.todos.update(todos =>
    todos.filter(todo => todo.id !== id)
    );

    this.todoService.removeTodo(id).subscribe({
      next: () => {
        this.todos.update(todos =>
        todos.filter(todo => todo.id !== id)
        );
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
