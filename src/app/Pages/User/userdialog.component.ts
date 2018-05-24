import {  Inject, Component } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import { CustomvalidationService } from "../../Services/customvalidation.service";
import { EmailService } from "../../Services/email-service";
import { UserRoleModel, UserModel } from "../../ViewModel/usermodel";
import { UserService } from "../../Services/user-service";
@Component({
    selector: 'user-dialog',
    templateUrl: 'userdialog.component.html',
    styleUrls: ['./user.component.scss'],
    providers: [CustomvalidationService,EmailService]
})
export class UserDialogComponent {
    updateForm: FormGroup;
    userId = new FormControl('');
    email = new FormControl('');
    password = new FormControl('');
    firstname = new FormControl('');
    lastname = new FormControl('');
    isLoading: boolean = false;
    customerror: string = '';
    hide = true;
    userRoles: UserRoleModel[];
    selectedRole = new FormControl('');
    oldRoleId: any;
    constructor(public dialogRef: MatDialogRef<UserDialogComponent>, @Inject(MAT_DIALOG_DATA) inputData,
        private fb: FormBuilder, private _userService: UserService, private _router: Router,private _emailService: EmailService) {

        var data= inputData.data;
       this.oldRoleId =data.roleId;
        this.userRoles=inputData.userRoles;
        this.userId = new FormControl(data.id);
        this.email = new FormControl(data.email, [Validators.required, Validators.email]);
        this.password = new FormControl(data.password, [Validators.required, CustomvalidationService.checkLimit(4, 16)]);
        this.firstname = new FormControl(data.firstname, [Validators.required]);
        this.lastname = new FormControl(data.lastname, [Validators.required]);
        this.selectedRole = new FormControl(data.roleId, [Validators.required]);
        this.updateForm = this.fb.group({
            "email": this.email,
            "password": this.password,
            "firstname": this.firstname,
            "lastname": this.lastname,
            "userId": this.userId,
            "selectedRole": this.selectedRole,
        });
    }

    closeDialog(): void {
        this.dialogRef.close();
    }

    updateFormSubmit() {
        this.customerror = "";
        if (this.updateForm.valid) {
            this.isLoading = true;
            let response = false;
            var userDetail = new UserModel();
            userDetail.FirstName = this.firstname.value;
            userDetail.Id = this.userId.value;
            userDetail.LastName = this.lastname.value;
            userDetail.EmailAddress = this.email.value;
            userDetail.Password = this.password.value;
            userDetail.RoleId = this.selectedRole.value;
            this._userService.updateUser(userDetail).subscribe(response => {
                if (response != null) {

                    this.isLoading = false;
                    this.dialogRef.close(true);
                    if( userDetail.RoleId != this.oldRoleId )
                    {
                    this._emailService.notifyUserPermissionChange( this.userId.value).subscribe(x=>x);
                    }
                }
                else {
                    this.customerror = "Unexpected error occurred. please try again later.1";
                    this.isLoading = false;
                }
            }, (err: HttpErrorResponse) => {
                response = false;
                this.customerror = "Unexpected error occurred. please try again later. 2";
                this.isLoading = false;
            }
            );
            this.updateForm.reset;
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
