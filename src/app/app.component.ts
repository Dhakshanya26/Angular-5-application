import { Component, OnInit,ViewChild, Injectable, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements  OnInit {

  users: any[];
  hasPermission: boolean=false;
 // mode = new FormControl('side');


    //fillerNav = Array(50).fill(0).map((_, i) => `Nav Item ${i + 1}`);

  /**
   *
   */

  ngOnInit() {
    if (this.hasPermission) {
      this.getUsers().then(users => this.users = users).catch(e =>
        console.log(e.message));
    } else {
      this.users = [];
    }
  }

  async getUsers() {
    return [{ name: 'FDS', email: 'sdfsdf@.com' }];
  }


}
