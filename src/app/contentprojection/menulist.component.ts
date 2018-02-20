import { Component, OnInit,ViewChild,ViewChildren, ElementRef } from '@angular/core';
import { MyMenu } from './menu';
import { ContentprojectionComponent } from './contentprojection.component';

@Component({
  selector: 'menu-list',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.scss'],
  
})
export class MenulistComponent implements OnInit {
  menus: MyMenu[];
  @ViewChild(ContentprojectionComponent) menuChild: ContentprojectionComponent;
  @ViewChild("myheader") headerEl: ElementRef;
 

  constructor() { }

  ngOnInit() {

    this.menus= [ new MyMenu('Contact','Full contact details'),new MyMenu('User roles','Full User Rolls')];
  }

  addMenu(){
    this.headerEl.nativeElement.textContent = "New Menu added"; 
    this.menus.unshift(new MyMenu('Another Detail','Some to add'));
  }
  ngAfterViewInit() {
    this.headerEl.nativeElement.textContent = "Best Menu"; 
  }
  deleteMenu (){
    this.menus=[];
  }
}
