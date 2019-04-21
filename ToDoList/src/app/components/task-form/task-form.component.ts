import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from './../../models/task';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  public title : string = '';
  public task : Task = null;
  @Output('addTask') addTask = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event){
    event.preventDefault();
    this.addTask.emit(this.title);
    this.title = '';
  }
}
