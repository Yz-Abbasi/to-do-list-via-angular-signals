import { Time } from "@angular/common";

export interface ToDo{
    id : number;
    task : string;
    time ?: Time;
    isCompleted : boolean;
}