import {  OnInit, ViewChild, Injectable, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { SessionService } from '../../Services/session-service';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss'],
  providers: [SessionService]
})
export class SidenavbarComponent implements OnInit {

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private _router: Router, private _sessionService: SessionService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

  }

  isClosed: boolean = true;
  mobileQuery: MediaQueryList;
  title = 'Administrator ';
  fillerNav = [];
  hasLoggedIn = false;
  private _mobileQueryListener: () => void;
  @ViewChild('sidenav') public sidenav: MatSidenav;
  ngOnInit() {

    var userDetails = sessionStorage.getItem('myuserdetail');
    if (userDetails != null) {
      // logged in so return true
      this.hasLoggedIn = true;
    }

    this._sessionService.watchStorage().subscribe((data: string) => {
      if (sessionStorage.getItem('myuserdetail') == null) {
        this.hasLoggedIn = false;

      }
      else {
        this.hasLoggedIn = true;
      }
    })
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  iconToggle() {
    this.isClosed = !this.isClosed;
  }
  iconClose() {
    this.isClosed = true;

  }
  logout() {
    // remove user from local storage to log user out
    this._sessionService.removeItem('myuserdetail');

    this._router.navigate(['/login']);
    this.isClosed = true;
  }
}
