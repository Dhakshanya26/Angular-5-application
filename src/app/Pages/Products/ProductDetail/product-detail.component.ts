import {  OnInit, Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductModel } from '../../../ViewModel/productmodel';
import { ProductService } from '../../../Services/product.service';
@Component({
//  selector: 'pro-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  providers:[ProductService]
})
export class ProductDetailComponent implements OnInit {
pageTitle: string = 'Product detail';
product: ProductModel;
errorMessage: string = '';
constructor(private _route: ActivatedRoute,private _ps: ProductService,
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
