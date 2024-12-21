import { Component, Output, EventEmitter, inject, Input } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  taskTitle = '';
  taskSummary = '';
  taskDueDate = '';
  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.taskTitle,
      summary: this.taskSummary,
      dueDate: this.taskDueDate
    }, this.userId);
    this.close.emit();
  }
}
