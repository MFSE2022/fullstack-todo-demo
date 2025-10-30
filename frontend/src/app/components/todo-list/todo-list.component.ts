import { Component, input, output } from '@angular/core';
import {TodoItemComponent} from "../todo-item/todo-item.component";

export interface Todo {
  createdAt: string;
  description: string;
  id: number;
  title: string;
  dueDate: string;
  dueFrom: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos = input.required<Todo[]>();
  todoToggled = output<number>();
  todoRemoved = output<number>();
  onToDoToggled(id: number) {
    this.todoToggled.emit(id);
  }
}
