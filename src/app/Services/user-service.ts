import { Injectable } from "@angular/core";
import { UserModel, UserRoleModel } from "../model/usermodel";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http/src/response";
import { isNull } from "util";
import { ProductModel } from "../model/productmodel";

@Injectable()
export class UserService {
  /**
   *
   */
  constructor(private _http: HttpClient) {

  }
  getUserDetailFromSession(): Observable<UserModel[]> {


    var userDetail = this._http.get<UserModel[]>('http://localhost/api/user/isauthorized', this.getHeaderOptions())
      .do(d => { console.log(JSON.stringify(d)) })
      .catch(this.handleError);
    return userDetail;

  }

  isAuthorizedUser(userName, password): Observable<UserModel> {

    var httpResponse = this._http.post<UserModel>('http://localhost/api/user/isauthorized',
      {
        'EmailAddress': userName,
        'Password': password
      }, this.getPostHeaderOptions()).do(d => d);
    return httpResponse;
  }
  getUsersByName = ( name:string ): Observable<UserModel[]> => {

    var users =      
    this._http.get<UserModel[]>('http://localhost/api/user/getusersbyname/'+name
     , this.getPostHeaderOptions()).do(d => d);
   
    return users;
  }
  getAllUsers = ( ): Observable<UserModel[]> => {

    var users =      
    this._http.get<UserModel[]>('http://localhost/api/user/getall'
     , this.getPostHeaderOptions()).do(d => d);
 
    return users;
  }
  getAllUserRoles = ( ): Observable<UserRoleModel[]> => {

    var userRoles =      
    this._http.get<UserRoleModel[]>('http://localhost/api/user/getallroles', this.getPostHeaderOptions()).do(d => d);
 
    return userRoles;
  }
  createUser = (user: UserModel): Observable<UserModel> => {

    var httpResponse = this._http.post<UserModel>('http://localhost/api/user/create',
      {
        'FirstName': user.FirstName,
        'EmailAddress': user.EmailAddress,
        'Password': user.Password,
        'LastName': user.LastName,
        'RoleId':user.RoleId
      }, this.getPostHeaderOptions()).do(d => d);


    return httpResponse;
  }
  updateUser = (user: UserModel): Observable<UserModel> => {

    var httpResponse = this._http.post<UserModel>('http://localhost/api/user/update',
      {
        'FirstName': user.FirstName,
        'EmailAddress': user.EmailAddress,
        'Password': user.Password,
        'LastName': user.LastName,
        'Id': user.Id,
        'RoleId':user.RoleId
      }, this.getPostHeaderOptions()).do(d => d);


    return httpResponse;
  }

  deleteUser = (userId: number): Observable<boolean> => {

    var httpResponse = this._http.post<boolean>('http://localhost/api/user/delete/' + userId, this.getPostHeaderOptions()).do(d => d);

    return httpResponse;
  }

  handleError = (err: any, caught: Observable<any>) => {
    return null;
  }
  getPostHeaderOptions = () => {
    const headers = new Headers();
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


  saveProduct = (product: ProductModel): Observable<ProductModel> => {
    if (product.ProductId > 0) {
      
      return this.updateProduct(product);
    }
    else {
      
     return this.createProduct(product);
    }
  }
  createProduct = (product: ProductModel): Observable<ProductModel> => {

    var httpResponse = this._http.post<ProductModel>('http://localhost/api/product/create',
      {
        'ProductId': product.ProductId,
        'ProductName': product.ProductName,
        'Sku': product.Sku,
        'ReleaseDate': product.ReleaseDate,
        'Price': product.Price,
        'Rating': product.Rating
      }, this.getPostHeaderOptions()).do(d => d);


    return httpResponse;
  }
  updateProduct = (product: ProductModel): Observable<ProductModel> => {

    var httpResponse = this._http.post<ProductModel>('http://localhost/api/product/update',
      {
        'ProductId': product.ProductId,
        'ProductName': product.ProductName,
        'Sku': product.Sku,
        'ReleaseDate': product.ReleaseDate,
        'Price': product.Price,
        'Rating': product.Rating
      }, this.getPostHeaderOptions()).do(d => d);


    return httpResponse;
  }

  deleteProduct = (productId: number): Observable<boolean> => {

    var httpResponse = this._http.post<boolean>('http://localhost/api/product/delete/' + productId, this.getPostHeaderOptions()).do(d => d);

    return httpResponse;
  }

}
