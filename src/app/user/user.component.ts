import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from '../Services/user-service';
import { IUserModel, UserModel, UserRoleModel } from '../model/usermodel';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CustomvalidationService } from '../angmaterial/customvalidation.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserDialogComponent } from './userdialog.component';
import { EmailService } from '../Services/email-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [UserService,EmailService],
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  isLoading: boolean = false;
  displayedColumns = ['id','name', 'email', 'roleName','action'];

  users: Element[];
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.filteredusers.sort = this.sort;
  }

  filteredusers = new MatTableDataSource(null);
  title: string = `UserCollection`;
  toolTipPosition: string = 'above';
  showName: boolean = true;
  _searchBy: string;
  errorMessage: string;
  selectedRowIndex: number;
  userRoles: UserRoleModel[];
  isGuestUser : boolean;
  get searchBy(): string {
    return this._searchBy;
  } 
  set searchBy(value: string) {
    this._searchBy = value;
    if (!this.searchBy) {
      this.filteredusers = new MatTableDataSource(this.users);
    }
    else {
      this.performFilter(this.searchBy)
    }
  }

  performFilter(searchBy: string): void {
    this.isLoading = true;
    searchBy = searchBy.toLocaleLowerCase();
    var users: any;
    this.filteredusers = new MatTableDataSource([]);
    this._ps.getUsersByName(searchBy).subscribe(pro => {

      users = pro.map((item: IUserModel) => {
        return <any>{
          "name": item.FirstName + ' ' + item.LastName, "email": item.EmailAddress, 'id': item.Id, 'firstname': item.FirstName,
          'lastname': item.LastName, 'password': item.Password,"roleId": item.RoleId  , "roleName": item.RoleName 
        };
      });
      this.filteredusers = new MatTableDataSource(users);
      this.isLoading = false;
    },
      error => this.errorMessage = <any>error);

  }

  reloadGrid = () => {
    var users: any;
    this._ps.getAllUsers().subscribe(pro => {

      users = pro.map((item: IUserModel) => {
        return <any>{
          "name": item.FirstName + ' ' + item.LastName, "email": item.EmailAddress, 'id': item.Id, 'firstname': item.FirstName,
          'lastname': item.LastName, 'password': item.Password,"roleId": item.RoleId  , "roleName": item.RoleName 
        };
      });
      this.filteredusers = new MatTableDataSource(users);
      this.isLoading = false;
    },
      error => this.errorMessage = <any>error);
  }

  getAllUserRoles = () => {
    this._ps.getAllUserRoles().subscribe(pro => {

      this.userRoles = pro ;
      // pro.map((item: UserRoleModel) => {
      //   return <UserRoleModel>{
      //     "roleId": item.RoleId  , "roleName": item.RoleName 
      //   };
     // });
    },error => this.errorMessage = <any>error);      
  }
  constructor(private _ps: UserService,private _emailService: EmailService, public dialog: MatDialog) {
  }

  toggleName(): void {
    this.showName = !this.showName;
  };
  ngOnInit(): void {
    this.isLoading = true;
    this._ps.getAllUsers().subscribe(pro => {
      var ementArray = [];
      pro.map((item: IUserModel) => {
        var element = {
          "name": item.FirstName + ' ' + item.LastName, "email": item.EmailAddress, 'id': item.Id, 'firstname': item.FirstName,
          'lastname': item.LastName, 'password': item.Password,"roleId": item.RoleId  , "roleName": item.RoleName 
        };
        ementArray.push(element);
      });
      this.users = ementArray;
      this.filteredusers = new MatTableDataSource(ementArray);
       
      this.isLoading = false;
    },
      error => this.errorMessage = <any>error);

      //Get all user roles.
      this.getAllUserRoles();
      this.isGuestUser= this.checkIsGuestUser();
  }

  openDialog = (row) => {
    let userDialogref = this.dialog.open(UserDialogComponent, {
      height: 'auto',
      width: '600px',
      data: {data: row, userRoles: this.userRoles}
    })
    userDialogref.afterClosed().subscribe(result => {
      if (result) {
        this.reloadGrid();
      }
    });
  }

  isEmailSentSuccessfully : boolean;
  changeMyRole =()=>{
    var userDetails = sessionStorage.getItem('myuserdetail');
    if (userDetails != null) {
        var userModel = JSON.parse(userDetails);
         this._emailService.requestPoweruserPermission(userModel.Id).subscribe(x=>{
        this.isEmailSentSuccessfully = x;
         }
      );
    }
  }

  selectedRow = (row) => {
    this.selectedRowIndex = row.id;
    this.openDialog(row);
  }

  checkIsGuestUser  =()=>{
    var userDetails = sessionStorage.getItem('myuserdetail');
    if (userDetails != null) {
        var userModel = JSON.parse(userDetails);
        if(userModel.RoleName == 'Guest')
        {
          return true;          
        }
        else{
          return false;  
        }          
    }
    return true;
  }

}

