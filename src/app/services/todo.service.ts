import { Injectable, signal } from '@angular/core';
import { ToDo } from '../types/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoSignal  = signal<ToDo[]>([])

  constructor() { }
}
