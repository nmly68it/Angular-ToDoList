import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './../models/task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public API_URL : string = 'http://localhost:3000/tasks';

  constructor(
    public http : HttpClient
  ) { }

  getAllTasks() : Observable<Task[]> {
	  return this.http.get<Task[]>(this.API_URL);
  }

  addTask(task : Task) : Observable<Task> {
    console.log("addTask" + task.completed);
    return this.http.post<Task>(this.API_URL, {
      title : task.title,
      completed : task.completed
    });
  }

  updateTask(task : Task) : Observable<Task> {
    return this.http.put<Task>(`${this.API_URL}/${task.id}`, {
      title : task.title,
      completed : task.completed
    });
  }

  deleteTask(taskId : number) : Observable<Task> {
    return this.http.delete<Task>(`${this.API_URL}/${taskId}`);
  }
}
