import { Injectable, signal } from '@angular/core';
import { ToDo } from '../types/todo.interface';
import { FilterEnum } from '../types/filter.enum';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoSignal  = signal<ToDo[]>([]);
  filterSignal = signal<FilterEnum>(FilterEnum.all);

  constructor() { }

  addTask(task : string): void{
    const toDo : ToDo = {
      task,
      isCompleted : false,
      id : Math.floor(Math.random())
    }
    this.todoSignal.update(toDos => [...toDos, toDo]);
  }

  changeFilter(filterName : FilterEnum): void{
    this.filterSignal.set(filterName);
  }
}