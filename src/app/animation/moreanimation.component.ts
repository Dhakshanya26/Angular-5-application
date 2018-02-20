import { Component, OnInit } from '@angular/core';
import {trigger,animate,state,stagger,style,transition} from '@angular/animations';
import { fadeIn, slideLeft } from './animation';

@Component({
  selector: 'app-moreanimation',
  templateUrl: './moreanimation.component.html',
  styleUrls: ['./moreanimation.component.scss'],
  animations:[ fadeIn,slideLeft ]
})
export class MoreanimationComponent implements OnInit {

  constructor() { }
  items: any[];
  items2: any[];
  ngOnInit() {
    this.items = ["Wash the dishes","Buy dishes"]
    this.items2 = ["Wash the dishes","Buy dishes"]
  }
  addItem(name){
    this.items.unshift(name.value);
    name.value= "";
  }
  removeItem(name){
   var index=  this.items.indexOf(name);
    this.items.splice(index,1);
  }

  addItem2(name){
    this.items2.unshift(name.value);
    name.value= "";
  }
  removeItem2(name){
   var index=  this.items2.indexOf(name);
    this.items2.splice(index,1);
  }
}
