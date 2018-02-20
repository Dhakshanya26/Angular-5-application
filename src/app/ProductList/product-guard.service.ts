import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductGuardService implements CanActivate {


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
   
    let id= +route.url[1].path;
  if(isNaN(id) || id< 1)
  {
    this._router.navigate(['/product']);
    return false;
  }
   return true;
  }

  constructor(private _router: Router) { }

}
