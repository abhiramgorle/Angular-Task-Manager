import { Component,Output,EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Task';
import {Subscription} from "rxjs";
@Component({
  selector: 'app-filterhead',
  templateUrl: './filterhead.component.html',
  styleUrls: ['./filterhead.component.css']
})
export class FilterheadComponent {
  priority:number;
  @Output() onAddFilter: EventEmitter<Task> = new EventEmitter()
  showFilter: boolean = false;
  subscription: Subscription;

  constructor(private uiservice: UiService){
    this.subscription = this.uiservice.onFilter().subscribe(value => (this.showFilter = value))
  }
  onSubmit(){
    
      console.log(this.priority)
    
  }

}
