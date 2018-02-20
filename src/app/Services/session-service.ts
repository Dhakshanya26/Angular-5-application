import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Observable } from "rxjs/Observable";

@Injectable()
export class SessionService {
  private storageSub= new Subject<boolean>();

  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }
 
  setItem(key: string, data: any) {
    sessionStorage.setItem(key, data);
    this.storageSub.next(true);
  }

  removeItem(key) {
    sessionStorage.removeItem(key);
    this.storageSub.next(true);
  }
}