import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {FormControl} from '@angular/forms';
@Component({
  
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(10%, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(90%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class MenuComponent implements OnInit {
  mode = new FormControl('over');
  constructor() { }
  // menuState:string = 'out';  
  // toggleMenu() {
  //   this.menuState = this.menuState === 'out' ? 'in' : 'out';
  // }
  ngOnInit() {
  }

}
