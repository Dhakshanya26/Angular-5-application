import { NgModule } from '@angular/core';

import { ProductListComponent } from './ProductList.Component';

import { RouterModule } from '@angular/router';
import { ConvertToSpacePipe } from './ConvertToSpacePipe';
import { AppRoutingModule } from '../app-routing.module';
import { ShardModule } from '../Shared/shard.module';
import { ProductDetail } from './product-detail.component';
import { ProductGuardService } from './product-guard.service';

import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatPaginator,} from '@angular/material';
import { AuthGuard } from '../auth-guard';
import { ProddialComponent } from './proddial/proddial.component';
import { ConfimationModalComponent } from '../Shared/confimation-dialog.component';
import { InformationModalComponent } from '../Shared/information-dialog.component';
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forChild([
      {path:'product',component:ProductListComponent,canActivate: [AuthGuard] },
      {path:'productdetail/:id',component:ProductDetail,canActivate: [ProductGuardService]},
     
    ]),
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    ShardModule,
  ],
  exports:[ MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,],
  providers: [ProductGuardService],
  declarations: [
    ProductListComponent,
    ConvertToSpacePipe,
    ProductDetail,
    ProddialComponent,
    ConfimationModalComponent,
    InformationModalComponent
  ],
  entryComponents: [
    ProddialComponent,
    ConfimationModalComponent,
    InformationModalComponent
  ],
})
export class ProductListModule { }
