import { ProductModel } from '../model/productmodel';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductapiService {

    constructor(private _http: HttpClient) {


    }
    getProducts(): Observable<ProductModel[]> {
  
      const headers = new Headers();
      headers.append('Access-Control-Allow-Origin', 'http://localhost/');
      headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
      headers.append('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  
      // headers.append('Access-Control-Allow-Headers', 'Content-Type');
      // headers.append('Access-Control-Allow-Methods', 'GET');
      // headers.append('Access-Control-Allow-Origin', '*');
      let options = new Object({ headers: headers });
      var products = this._http.get<ProductModel[]>('http://localhost/api/product/getall', options)
        .do(d => {
          console.log(JSON.stringify(d))
        });// .catch(this.handleError);
      return products;
  
    }
  
    getProductsByName(name: string): Observable<ProductModel[]> {
      const headers = new Headers();
      headers.append('Access-Control-Allow-Headers', 'Content-Type');
      headers.append('Access-Control-Allow-Methods', 'GET');
      headers.append('Access-Control-Allow-Origin', '*');
      let options = new Object({ headers: headers });
      var products = this._http.get<ProductModel[]>(`http://localhost/api/product/getbyname/${name}`, options)
        .do(d => console.log(JSON.stringify(d)));// .catch(this.handleError);
      return products;
  
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
  
    getProductsById(id: string): Observable<ProductModel> {
      const headers = new Headers();
      headers.append('Access-Control-Allow-Headers', 'Content-Type');
      headers.append('Access-Control-Allow-Methods', 'GET');
      headers.append('Access-Control-Allow-Origin', '*');
      let options = new Object({ headers: headers });
      var products = this._http.get<ProductModel>(`http://localhost/api/product/getbyid/${id}`, options)
        .do(d => console.log(JSON.stringify(d)));// .catch(this.handleError);
      return products;
  
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
  
    private handleError(err: HttpErrorResponse) {
      console.log(err.message);
    }
  
}
