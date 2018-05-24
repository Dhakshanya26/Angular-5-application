import {  OnInit, Inject, ViewChild, ElementRef, Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductModel } from '../../../ViewModel/productmodel';
import { ProductDMLService } from '../../../Services/product.dml-service';

@Component({
  selector: 'app-proddial',
  templateUrl: './productDialog.component.html',
  styleUrls: ['./productDialog.component.scss'],
   providers:[ProductDMLService]
})
export class productDialogComponent  {
  updateForm: FormGroup;
  productId = new FormControl('');
  productName = new FormControl('');
  sku = new FormControl('');
  releaseDate = new FormControl('');
  price = new FormControl('');
  rating = new FormControl('');
  customerror: string = '';
  hide = true;
  selectedRole = new FormControl('');
  isLoading: boolean;
  @ViewChild("txtRating") txtRating: ElementRef;
  constructor(public dialogRef: MatDialogRef<productDialogComponent>, @Inject(MAT_DIALOG_DATA) inputData,
    private fb: FormBuilder, private _router: Router,private _productservice: ProductDMLService ) {
    var data = inputData;
    this.productId = new FormControl(data.productId);
    this.productName = new FormControl(data.productName, [Validators.required]);
    this.sku = new FormControl(data.sku, [Validators.required]);
    this.releaseDate = new FormControl(data.releaseDate, [Validators.required]);
    this.price = new FormControl(data.price, [Validators.required]);
    this.rating = new FormControl(data.rating);
    this.updateForm = this.fb.group({
      "productId": this.productId,
      "productName": this.productName,
      "sku": this.sku,
      "releaseDate": this.releaseDate,
      "price": this.price,
      "rating": this.rating,
    });
  }

  onRatingClick=(number)=>{

    this.txtRating.nativeElement.value = number;
    this.rating= new FormControl(number);
    console.log( this.rating.value);
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

  SubmitForm() {
    this.customerror = "";
    if (this.updateForm.valid) {
      this.isLoading = true;
      let response = false;
      var product = new ProductModel();
      product.ProductId = this.productId.value;
      product.ProductName = this.productName.value;
      product.Price = this.price.value;
      product.Rating = this.rating.value;
      product.ReleaseDate = this.releaseDate.value;
      product.Sku = this.sku.value;

      this._productservice.saveProduct(product).subscribe(response => {
        if (response != null) {

          this.isLoading = false;
          this.dialogRef.close(true);

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
  getProductNameErrorMessage() {
    this.customerror = "";
    return this.productName.hasError('required') ? 'Product name is required.' : '';
  }
  getPriceErrorMessage() {
    this.customerror = "";
    return this.price.hasError('required') ? 'Price is required.' : '';
  }
  getReleaseDateErrorMessage() {
    this.customerror = "";
    return this.releaseDate.hasError('required') ? 'You must select a date.' : '';
  }
  getRatingErrorMessage() {
    this.customerror = "";
    return this.rating.hasError('required') ? 'Rating is required.' : '';
  }
  getSkuErrorMessage() {
    this.customerror = "";
    return this.sku.hasError('required') ? 'Sku is required.' : '';
  }
}

