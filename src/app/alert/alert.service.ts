import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { NavigationStart } from "@angular/router";
import {Subject} from 'rxjs/Subject';
import { Observable } from "rxjs/Observable";


@Injectable()
export class AlertService {
    private subject = new Subject<any>();
    private keepAfterNavigationChange = false;
  constructor(private router:Router) {
      
    router.events.subscribe(e=>{
        if(e instanceof NavigationStart)
        {

            if(this.keepAfterNavigationChange)
            {
                this.keepAfterNavigationChange = false;
            }
            else{
                this.subject.next();
            }
        }
    });
  }

success(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'success', text: message });
}

error(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'error', text: message });
}

getMessage(): Observable<any> {
    return this.subject.asObservable();
}
}
