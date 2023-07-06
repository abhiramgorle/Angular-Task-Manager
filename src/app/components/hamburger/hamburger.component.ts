import { Component,Output,EventEmitter  } from '@angular/core';

import {faBars} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent {
  fabars = faBars;
  @Output() btnsClick = new EventEmitter();

  onClickk(){
    this.btnsClick.emit();
  }
}
