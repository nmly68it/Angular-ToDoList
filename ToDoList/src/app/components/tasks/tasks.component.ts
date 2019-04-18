import { Component, OnInit } from '@angular/core';
import { TaskService } from './../../services/task.service';
import { Task } from './../../models/task';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  public tasks : Task[] = [];
  public subscription : Subscription;

  constructor(
	  public taskService : TaskService
  ) { }

  ngOnInit() {
    this.taskService.getAllTasks().subscribe(tasks => this.tasks = tasks);
  }
}
