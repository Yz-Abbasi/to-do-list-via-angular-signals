import { Component, Input } from '@angular/core';
import { ToDo } from "src/app/types/todo.interface";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass'],
  standalone: true
})
export class TaskComponent {
  @Input({required: true}) toDo !: ToDo;
}
