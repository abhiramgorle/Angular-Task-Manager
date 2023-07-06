import { Component,Output,EventEmitter  } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import {Subscription} from "rxjs";
import {Router} from '@angular/router';
import {faBars} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { 
  title: string = 'Abhiram Task Manager';
  showAddTask: boolean = false;
  showFilter: boolean = false;
  subscription: Subscription;
  fabars = faBars;

  constructor(private uiservice:UiService, private router: Router){
    this.subscription = this.uiservice.onToggle().subscribe(value => (this.showAddTask = value))
    this.subscription = this.uiservice.onFilter().subscribe(value => (this.showFilter = value))
  }
  toggleAddTask(){
    this.uiservice.toggleAddTask();
  }
  hasRoute(route: string){
    return this.router.url === route;

  }
  toggleFilter() {
    this.uiservice.toggleFilter();
    console.log("hamburger")
  }
}
