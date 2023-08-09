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
      id : Math.round(Math.random() * 1000)
    }
    console.log(`Task's ID is : ${toDo.id}`)
    this.todoSignal.update(toDos => [...toDos, toDo]);
  }

  changeFilter(filterName : FilterEnum): void{
    this.filterSignal.set(filterName);
  }

  changeTask(id : number, task : string): void{
    this.todoSignal.update(todos => todos.map(todo => todo.id === id ? {...todo, task} : todo));
  }

  deleteTodo(id : number): void {
    this.todoSignal.update(todos => todos.filter((todo) => todo.id !== id));
  }

  toggleTodo(id : number): void {
    this.todoSignal.update((todos) => todos.map(todo => todo.id === id ? {...todo, isCompleted : !todo.isCompleted} : todo));
  }

  toggleAllTasks(isCompleted : boolean): void {
    this.todoSignal.update((todos) => todos.map((todo) => ({...todo, isCompleted})))
  }
}