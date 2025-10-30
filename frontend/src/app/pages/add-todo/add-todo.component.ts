import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-add-todo',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  router=inject(Router);
  fb = inject(FormBuilder);
  todoService= inject(TodoService);
  todoForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    dueUntil: [''],
    description: [''],
  })

  onSave() {
    if (this.todoForm.valid) {
      const newTodo = {
        title: this.todoForm.value.title,
        dueDate: this.todoForm.value.dueUntil,
        description: this.todoForm.value.description,
        completed: false
      };

      this.todoService.createTodo(newTodo).subscribe({
        next: (createdTodo) => {
          console.log(createdTodo);
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

  onDiscard() {
    this.router.navigate(['/']);
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
