import { Injectable, signal } from '@angular/core';
import { ToDo } from '../types/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoSignal  = signal<ToDo[]>([]);

  constructor() { }

  addTask(task : string): void{
    const toDo : ToDo = {
      task,
      isCompleted : false,
      id : Math.floor(Math.random())
    }
    this.todoSignal.update(toDos => [...toDos, toDo]);
  }
}