import { Component, OnInit, inject } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {
  toDoService = inject(TodoService);

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
}
