import { Component, OnInit, computed, inject } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { FilterEnum } from '../types/filter.enum';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {
  toDoService = inject(TodoService);

  filterSig = this.toDoService.filterSignal;
  filterEnum = FilterEnum;

  activeTasksCount = computed(() => {
    return this.toDoService.todoSignal().filter((todo) => !todo.isCompleted).length;
  });

  noTask = computed(() => {
    return this.toDoService.todoSignal().length === 0;
  });

  itemsLeftCount = computed(() => `item${this.activeTasksCount() > 1 ? 's' : ''} left` );

  visibleTodos = computed(() => {
    const todos = this.toDoService.todoSignal();
    const filter = this.toDoService.filterSignal();

    if (filter === FilterEnum.active){
      return todos.filter(todo => !todo.isCompleted);
    } else if (filter === FilterEnum.completed){
      return todos.filter(todo => todo.isCompleted);
    }
    return todos;
  })

  text : string = "";
  constructor() { }

  ngOnInit(): void {
  }

  changeText(event : Event): void {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
  }

  addToDo(): void {
    this.toDoService.addTask(this.text);
    this.text = "";
  }

  changeFilter(event : Event , filterState : any): void {
    event.preventDefault();
    this.toDoService.changeFilter(filterState);
  }
}
