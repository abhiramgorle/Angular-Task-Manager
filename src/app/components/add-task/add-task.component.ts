import { Component,Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import {Subscription} from "rxjs";
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
  text:string;
  day:string;
  reminder: boolean = false;
  priority:number;
  showAddTask:boolean;
  subscription: Subscription;

  constructor(private uiservice: UiService){
    this.subscription = this.uiservice.onToggle().subscribe(value => (this.showAddTask = value))
  }

  onSubmit(){
    if(!this.text){
      alert("Please add a task");
      return;
    }

    const newTask ={
      text: this.text,
      day: this.day,
      reminder: this.reminder,
      priority : this.priority

    }

    this.onAddTask.emit(newTask);
    

    this.text = "";
    this.day = "";
    this.reminder = false;
    this.priority = 0

  }
  
}
