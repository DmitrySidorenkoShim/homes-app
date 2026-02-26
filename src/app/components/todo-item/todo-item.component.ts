import { Component, input, output } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { Todo } from '../../model/todo.type';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [HighlightCompletedTodoDirective, UpperCasePipe],
  template: `
    <div
      appHighlightCompletedTodo
      [isCompleted]="todo().completed"
      (click)="todoClicked()"
      class="todo-item"
    >
      {{ todo().title | uppercase }}
    </div>
  `,
  styles: [
    `
      .todo-item {
        padding: 0.5rem;
        margin: 0.25rem 0;
        cursor: pointer;
        border: 1px solid #eee;
        border-radius: 4px;
      }
    `,
  ],
})
export class TodoItemComponent {
  todo = input.required<Todo>();
  todoToggled = output<Todo>();

  todoClicked() {
    this.todoToggled.emit(this.todo());
  }
}
