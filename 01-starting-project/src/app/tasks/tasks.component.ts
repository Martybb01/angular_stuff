import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input() name: string | undefined;
  isAddingTask  = false;

  // execute when the component is created
  constructor(private tasksService: TasksService) {};

  get userTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onNewTask() {
    this.isAddingTask = true;
  }

  onCloseNewTask() {
    this.isAddingTask = false;
  }

}
