import {Component, inject, Inject, input, output} from '@angular/core';
import {DatePipe} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo-item',
  imports: [
    DatePipe
  ],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  id = input.required<number>();
  title = input.required<string>();
  dueDate = input<string>('');
  completed = input<boolean>();
  description = input<string>();
  createdAt = input<string>('');
  toggle = output<void>();
  remove = output<void>();
  isExpanded = false;
  moreText: string = "mehr"
  router = inject(Router);

  onCheckboxChange() {
    console.log('todo-item: Checkbox geklickt!', this.title());
    this.toggle.emit();
  }

  onRemoveClicked() {
    console.log('todo-item: remove geklickt!', this.title());
    const confirmation = window.confirm(`Willst du wirklich folgendes To-Do löschen? : "${this.title()}"`);
    if (confirmation) {
      this.remove.emit();
    } else {
      console.log('TodoItem not removed');
    }
  }

  onMoreClicked() {
    this.isExpanded = true;
    this.moreText = "weniger";
  }

  onLessClicked() {
    this.isExpanded = false;
    this.moreText = "mehr";
  }

  onEditClicked() {
    this.router.navigate(['/edit-todo/', this.id()]);
  }

}
