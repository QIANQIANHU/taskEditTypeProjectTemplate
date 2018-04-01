import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentFocus: string = 'Build your own bouquet';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  selectedTask = null;

  masterTaskList: Task[] = [
    new Task('Rose', 3),
    new Task('Peony', 2),
    new Task('Hydrangea', 1),
    new Task('Calla Lily', 3),
    new Task('Lily', 2),
    new Task('Dahlia', 1),
    new Task('Tulip', 3)
  ];

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  finishedEditing() {
  this.selectedTask = null;
  }

  addTask(newTask: Task) {
  this.masterTaskList.push(newTask);
  }

}
