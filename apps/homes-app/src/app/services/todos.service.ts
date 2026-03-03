import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private http = inject(HttpClient);

  getTodosFromApi() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
