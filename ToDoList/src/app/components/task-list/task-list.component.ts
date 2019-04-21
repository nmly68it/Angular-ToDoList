import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input('tasks') tasks : Task[];
  @Output('taskStatusUpdated') taskStatusUpdated = new EventEmitter<Task>();
  @Output('taskIdDeleted') taskIdDeleted = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  onUpdateStatus(task : Task) : void{
    this.taskStatusUpdated.emit(task);
  }

  onDeleteTask(taskId : number){
    this.taskIdDeleted.emit(taskId);
  }
}
