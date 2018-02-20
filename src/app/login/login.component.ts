import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomvalidationService } from '../angmaterial/customvalidation.service';
import { UserService } from '../Services/user-service';
import { UserModel } from "../model/usermodel";
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { SessionService } from '../Services/session-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [CustomvalidationService, UserService,SessionService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;

  isLoginForm: boolean = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, CustomvalidationService.checkLimit(4, 16)]);

  registeremail = new FormControl('', [Validators.required, Validators.email]);
  registerpassword = new FormControl('', [Validators.required, CustomvalidationService.checkLimit(4, 16)]);
  firstname = new FormControl('', [Validators.required]);
  lastname = new FormControl('', [Validators.required]);
  isLoading: boolean = false;
  customerror: string = '';
  hide = true;
  constructor(private fb: FormBuilder, private _userService: UserService, private _router: Router,private _sessionService:SessionService) {

  }

  ngOnInit() {


    this.loginForm = this.fb.group({
      "email": this.email,
      "password": this.password,
    });
    this.registerForm = this.fb.group({
      "registeremail": this.registeremail,
      "registerpassword": this.registerpassword,
      "firstname": this.firstname,
      "lastname": this.lastname,
    });
  }

  openLoginForm = () => {
    this.isLoginForm = true;
  }
  openRegisterForm() {
    this.isLoginForm = false;
  }
  onSubmit() {
    this.customerror = "";

    if (this.loginForm.valid) {
      this.isLoading = true;
      this._sessionService.removeItem('myuserdetail');
      this.loginForm.reset;
      let response = false;
      var userDetail = new UserModel();

      userDetail.EmailAddress = this.email.value;
      userDetail.Password = this.password.value;
      this._userService.isAuthorizedUser(this.email.value, this.password.value).subscribe(response => {
        if (response != null) {
          this._sessionService.setItem('myuserdetail', JSON.stringify(response));
          this._router.navigate(['/']);
          this.isLoading = false;
        }
        else {
          this.isLoading = false;
          this.customerror = "Invalid inputs. Please try again.";
        }
      },

        (err: HttpErrorResponse) => {
          response = false;
          this.customerror = "Unexpected error occured. Please try again later";
          this.isLoading = false;
        }
      );


    }
    else {
      this.customerror = "Unexpected error occured. Please try again later";
      this.isLoading = false;
    }

  }


  registerFormSubmit() {
    this.customerror = "";
    if (this.registerForm.valid) {
      this.isLoading = true;
      
      this._sessionService.removeItem('myuserdetail');
      this.registerForm.reset;
      let response = false;
      var userDetail = new UserModel();
      userDetail.FirstName = this.firstname.value;
      userDetail.LastName = this.lastname.value;
      userDetail.EmailAddress = this.registeremail.value;
      userDetail.Password = this.registerpassword.value;
      this._userService.createUser(userDetail).subscribe(response => {
        if (response != null) {
          this._sessionService.setItem('myuserdetail', JSON.stringify(response));
          this._router.navigate(['/']);
          this.isLoading = false;

        }
        else {
          this.customerror = "Unexpected error occurred. please try again later.";
          this.isLoading = false;
        }
      },

        (err: HttpErrorResponse) => {
          response = false;
          this.customerror = "Unexpected error occurred. please try again later.";
          this.isLoading = false;
        }
      );


    }
    else {
      this.customerror = "Please check all inputs and try again later";
      this.isLoading = false;
    }
  }
  getFirstNameErrorMessage() {
    this.customerror = "";
    return this.firstname.hasError('required') ? 'Firstname is required.' : '';
  }
  getLastNameErrorMessage() {
    this.customerror = "";
    return this.lastname.hasError('required') ? 'Lastname is required.' : '';
  }
  getErrorMessage() {
    this.customerror = "";
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  getPasswordErrorMessage() {
    this.customerror = "";
    return this.password.hasError('required') ? 'You must enter a value' :
      this.password.hasError('range') ? 'Minimum 5 charcter and max 11 characters' :
        '';
  }
}
