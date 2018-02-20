import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { UserService } from "./Services/user-service";
import { Injectable } from "@angular/core";
import { UserModel } from "./model/usermodel";
import { parse } from "url";


@Injectable()
export class AuthGuard implements CanActivate {

    userDetails: any;
    errorMessage: any = '';
     
    constructor(private router: Router, private _userService: UserService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

        var userDetails = sessionStorage.getItem('myuserdetail');
        if (userDetails != null) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }

}

 