import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, inject, OnChanges, SimpleChanges } from '@angular/core';
import { ToDo } from "src/app/types/todo.interface";
import { TodoService } from '../services/todo.service';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass'],
})
export class TaskComponent implements OnInit, OnChanges {
  @Input({required: true}) toDo !: ToDo;
  @Input({required: true}) isEditing !: boolean;

  @Output() setEditingId : EventEmitter<number | null> = new EventEmitter();

  @ViewChild("textInput") textInput ?: ElementRef;

  todoService = inject(TodoService);

  editingText : string = "";

  ngOnInit(): void {
    this.editingText = this.toDo.task;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["isEditing"].currentValue){
      setTimeout
    }
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

  deleteTask(): void {
    this.todoService.deleteTodo(this.toDo.id);
  }

  toggleTodo(): void {
    this.todoService.toggleTodo(this.toDo.id);
  }
}
