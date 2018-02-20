import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../model/productmodel';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductapiService } from '../services/productapi-service';
@Component({
//  selector: 'pro-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers:[ProductapiService]
})
export class ProductDetail implements OnInit {
pageTitle: string = 'Product detail';
product: ProductModel;
errorMessage: string = '';
constructor(private _route: ActivatedRoute,private _ps: ProductapiService,
private _router: Router) {
  console.log(this._route.snapshot.paramMap.get('id'));
}

  ngOnInit() {
    var productId=this._route.snapshot.paramMap.get('id');
    
    this._ps.getProductsById(productId).subscribe(x=> this.product = x,
      error=> this.errorMessage = <any>error);

  }

  onBack(): void{
     this._router.navigate(['/product']);
  }
}
