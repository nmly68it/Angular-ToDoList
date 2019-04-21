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

  addTask(title : string){
    let task = new Task(title);
    this.taskService.addTask(task).subscribe(task => {
      this.tasks.push(task);
    });
  }

  onUpdateStatus(task : Task){
    task.completed = !task.completed;
    this.taskService.updateTask(task).subscribe(task => {
      this.updateTask(task);
    });
  }

  updateTask(task : Task){
    for (var i=0; i < this.tasks.length; i++){
      if(this.tasks[i].id === task.id){
        this.tasks[i] = task;
        break;
      }
    }
  }

  onDeleteTask(taskId : number){
    this.taskService.deleteTask(taskId).subscribe(task => {
      this.deleteTask(taskId);
    });
  }

  deleteTask(taskId : number){
    for (var i=0; i < this.tasks.length; i++){
      if(this.tasks[i].id === taskId){
        this.tasks.splice(i, 1);
      }
    }
  }
}
