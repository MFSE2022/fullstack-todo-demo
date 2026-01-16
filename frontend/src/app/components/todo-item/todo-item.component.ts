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
    this.toggle.emit();
  }

  onRemoveClicked() {
    const confirmed = window.confirm(`"${this.title()}" wirklich löschen?`);
    if (confirmed) {
      this.remove.emit();
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
