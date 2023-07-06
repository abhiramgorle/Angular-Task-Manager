import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTrash,faBell,faBellSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task: Task;
  fatrash = faTrash;
  fabell = faBell;
  fabellslash = faBellSlash;
  reminder:boolean;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  onDelete(task:Task) {
    this.onDeleteTask.emit(task);
  }
  onToggle(task:Task) {
    this.onToggleReminder.emit(task);
    this.reminder =! this.reminder;
  }
}
