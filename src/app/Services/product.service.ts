import { ProductModel } from '../ViewModel/productmodel';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

    constructor(private _http: HttpClient) {
    }
    getProducts(): Observable<ProductModel[]> {
      let options = this.getPostHeaderOptions();
      var products = this._http.get<ProductModel[]>('http://restservice.dvsmarttech.co.uk/api/product/getall', options)
        .do(d => {
          console.log(JSON.stringify(d))
        });
      return products;
    }

    getProductsByName(name: string): Observable<ProductModel[]> {
      let options = this.getPostHeaderOptions();
      var products = this._http.get<ProductModel[]>(`http://restservice.dvsmarttech.co.uk/api/product/getbyname/${name}`, options)
        .do(d => console.log(JSON.stringify(d)));// .catch(this.handleError);
      return products;
    }

    getProductsById(id: string): Observable<ProductModel> {
      const headers = new Headers();
      headers.append('Access-Control-Allow-Headers', 'Content-Type');
      headers.append('Access-Control-Allow-Methods', 'GET');
      headers.append('Access-Control-Allow-Origin', '*');
      let options = new Object({ headers: headers });
      var products = this._http.get<ProductModel>(`http://restservice.dvsmarttech.co.uk/api/product/getbyid/${id}`, options)
        .do(d => console.log(JSON.stringify(d)));// .catch(this.handleError);
      return products;

    }
    deleteProduct = (productId: number): Observable<boolean> => {
      var httpResponse = this._http.post<boolean>('http://restservice.dvsmarttech.co.uk/api/product/delete/' + productId, this.getPostHeaderOptions()).do(d => d);
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
