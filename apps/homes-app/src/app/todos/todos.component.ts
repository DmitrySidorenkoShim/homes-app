import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { catchError } from 'rxjs';
import { Todo } from '../model/todo.type';
import { TodosService } from '../services/todos.service';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItemComponent, FormsModule, FilterTodosPipe],
  template: `
    <section class="todos">
      <h2>Todos List</h2>
      @if (!todoItems().length) {
        <p>Loading...</p>
      } @else {
        <div class="filter">
          <label for="filter">Filter Todos</label>
          <input
            id="filter"
            type="text"
            [ngModel]="searchTerm()"
            (ngModelChange)="searchTerm.set($event)"
            placeholder="Type to filter..."
          />
        </div>
        <div class="todo-list">
          @for (todo of todoItems() | filterTodos : searchTerm(); track todo.id) {
            <app-todo-item
              [todo]="todo"
              (todoToggled)="updateTodoItem($event)"
            />
          }
        </div>
      }
    </section>
  `,
  styles: [
    `
      .todos {
        padding: 1rem 0;
      }
      .todos h2 {
        margin-top: 0;
      }
      .filter {
        margin-bottom: 1rem;
      }
      .filter input {
        margin-left: 0.5rem;
        padding: 0.25rem 0.5rem;
      }
    `,
  ],
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Todo[]>([]);
  searchTerm = signal('');

  ngOnInit(): void {
    this.todoService
      .getTodosFromApi()
      .pipe(
        catchError((err) => {
          console.error(err);
          throw err;
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      });
  }

  updateTodoItem(todoItem: Todo) {
    this.todoItems.update((todos) =>
      todos.map((todo) =>
        todo.id === todoItem.id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
}
