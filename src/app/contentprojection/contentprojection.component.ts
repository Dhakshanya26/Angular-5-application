import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';
import { MyMenu } from './menu';
import { Observable } from 'rxjs/Observable';
import * as Rx from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/Rx';
@Component({
  selector: 'menu1',
  templateUrl: './contentprojection.component.html',
  styleUrls: ['./contentprojection.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.Native
  // encapsulation: ViewEncapsulation.None
  ,
 
})
export class ContentprojectionComponent implements OnInit {
  @Input('menu') data: MyMenu;
 @Output() menuCreated=  new EventEmitter<MyMenu>();

 createMenu(name: string, description: string)
 {
   this.menuCreated.emit(new MyMenu(name,description));
 }
  constructor() {

    let obs = Observable
    .interval(1000)
    .take(3)
    .map((v) => Date.now());
    ;

obs.subscribe(value => value);
   }
  ngOnInit() { }
}

