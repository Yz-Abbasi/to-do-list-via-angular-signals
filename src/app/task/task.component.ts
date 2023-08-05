import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { ToDo } from "src/app/types/todo.interface";
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass'],
})
export class TaskComponent implements OnInit {
  @Input({required: true}) toDo !: ToDo;
  @Input({required: true}) isEditing !: boolean;

  @Output() setEditingId : EventEmitter<number | null> = new EventEmitter();

  todoService = inject(TodoService);

  editingText : string = "";

  ngOnInit(): void {
    this.editingText = this.toDo.task;
  }

  changeText(event : Event): void{
    const value = (event.target as HTMLInputElement).value;
    this.editingText = value;
  }

  changeTodo(): void {
    this.todoService.changeTask(this.toDo.id, this.editingText);
    this.setEditingId.emit(null);
  }

  activateEditMode(): void {
    this.setEditingId.emit(this.toDo.id)
  }
}
