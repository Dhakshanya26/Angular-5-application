import { ProductModel } from '../ViewModel/productmodel';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductDMLService {

    constructor(private _http: HttpClient) {
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

    var httpResponse = this._http.post<ProductModel>('http://restservice.dvsmarttech.co.uk/api/product/create',
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
    var httpResponse = this._http.post<ProductModel>('http://restservice.dvsmarttech.co.uk/api/product/update',
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


    getPostHeaderOptions = () => {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json')
      headers.append('Access-Control-Allow-Origin', 'http://restservice.dvsmarttech.co.uk/');
      headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
      headers.append('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

      let options = new Object({ headers: headers });
      return options;
    }

    private handleError(err: HttpErrorResponse) {
      console.log(err.message);
    }

}
