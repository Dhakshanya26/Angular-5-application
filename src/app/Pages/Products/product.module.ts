import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShardModule } from '../Shared/shard.module';
import { ProductDetailComponent } from './ProductDetail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ProductGridComponent } from './ProductGrid/ProductGrid.Component';
import { AuthGuard } from '../../Gaurds/auth-guard';
import { ProductGuardService } from '../../Gaurds/product-guard.service';
import { ConvertToSpacePipe } from '../../Pipes/ConvertToSpacePipe';
import { productDialogComponent } from './ProductDialog/productDialog.component';
import { ConfimationModalComponent } from '../Shared/dialogs/confimation-dialog.component';
import { InformationModalComponent } from '../Shared/dialogs/information-dialog.component';
import { CommonModule } from '../../common.module';
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forChild([
      { path: '', component: ProductGridComponent, canActivate: [AuthGuard] },
      { path: 'product', component: ProductGridComponent, canActivate: [AuthGuard] },
      { path: 'productdetail/:id', component: ProductDetailComponent, canActivate: [ProductGuardService] },
    ]),
    ShardModule,
    CommonModule
  ],
  providers: [ProductGuardService],
  declarations: [
    ProductGridComponent,
    ConvertToSpacePipe,
    ProductDetailComponent,
    productDialogComponent,
    ConfimationModalComponent,
    InformationModalComponent
  ],
  entryComponents: [
    productDialogComponent,
    ConfimationModalComponent,
    InformationModalComponent
  ],
})
export class ProductModule { }
