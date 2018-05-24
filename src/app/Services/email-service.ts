import { Injectable } from "@angular/core";
import { UserModel, UserRoleModel } from "../ViewModel/usermodel";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http/src/response";
import { isNull, debug } from "util";

@Injectable()
export class EmailService {
  /**
   *
   */
  constructor(private _http: HttpClient) {

  }
  requestPoweruserPermission(userid:number): Observable<boolean> {
    // NOTE: Removed actual service Url.
    var response = this._http.post<boolean>('http://localhost/api/email/requestPoweruserPermission?userId='+userid ,
       this.getHeaderOptions())
      .do(d => { console.log(JSON.stringify(d)) })
      .catch(this.handleError);
    return response;
  }
  notifyUserPermissionChange(userid:number): Observable<boolean> {
 // NOTE: Removed actual service Url.
    var response = this._http.post<boolean>('http://localhost/api/email/userPermissionChange?userId='+userid, 
       this.getHeaderOptions())
      .do(d => { console.log(JSON.stringify(d)) })
      .catch(this.handleError);
    return response;
  }


  handleError = (err: any, caught: Observable<any>) => {
    return null;
  }
  getPostHeaderOptions = () => {
    const headers = new Headers();
     // NOTE: Removed actual service Url.
    headers.append('Content-Type', 'application/json')
    headers.append('Access-Control-Allow-Origin', 'http://localhost');
    headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    headers.append('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    let options = new Object({ headers: headers });
    return options;
  }
  getHeaderOptions = () => {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', 'http://localhost');
    headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    headers.append('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    let options = new Object({ headers: headers });
    return options;
  }
}
