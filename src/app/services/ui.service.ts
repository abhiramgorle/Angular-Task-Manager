import { Injectable } from '@angular/core';
import {Observable,Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private showFilter: boolean = false;
  private subject1 = new Subject<any>();
  private subject2 = new Subject<any>();

  constructor() { }

  toggleAddTask() : void {
    this.showAddTask = !this.showAddTask;
    this.subject1.next(this.showAddTask);
  }
  onToggle() : Observable<any>{
    return this.subject1.asObservable();
  }

  toggleFilter() : void {
    this.showFilter = !this.showFilter;
    this.subject2.next(this.showFilter)
  }

  onFilter() : Observable<any>{
    return this.subject2.asObservable();
  }
}
