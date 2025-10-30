import {Component, computed, effect, inject, Signal} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-edit-todo',
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './edit-todo.component.html',
  styleUrl: './edit-todo.component.css'
})
export class EditTodoComponent {
  router=inject(Router);
  route = inject(ActivatedRoute);
  fb = inject(FormBuilder);
  todoService= inject(TodoService);

  todoForm: FormGroup;

  todoId: number;


  navigateToHome() {
    this.router.navigate(['/']);
  }

  onUpdate() {
    if (this.todoForm.valid) {
      const updatedTodo = {
        title: this.todoForm.value.title,
        dueDate: this.todoForm.value.dueUntil,
        description: this.todoForm.value.description
      };

      this.todoService.updateTodo(this.todoId, updatedTodo).subscribe({
        next: (updatedTodo) => {
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }
  constructor() {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      dueUntil: [''],
      description: [''],
    });

    this.todoId = Number(this.route.snapshot.paramMap.get('id'));

    console.log('TodoId:', this.todoId);

    this.todoService.getTodoById(this.todoId).subscribe({
      next: (todo) => {
        this.todoForm.patchValue({
          title: todo.title,
          description: todo.description,
          dueUntil: todo.dueDate?.split('T')[0]
        });
      },
      error: (err) => console.error('Fehler:', err)
    });
  }

  onDiscard() {
    this.navigateToHome();
  }
}
