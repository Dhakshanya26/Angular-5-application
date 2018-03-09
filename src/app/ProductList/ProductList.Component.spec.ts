import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './ProductList.component';
import { ProductapiService } from '../services/productapi-service';
import { ProductModel } from '../model/productmodel';
import { Observable } from 'rxjs/Observable';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatAutocompleteModule,    MatButtonModule,    MatButtonToggleModule,    MatCardModule,    MatCheckboxModule,    MatChipsModule,    MatDatepickerModule,    MatDialogModule,
    MatExpansionModule,    MatGridListModule,    MatIconModule,    MatInputModule,    MatListModule,    MatMenuModule,    MatNativeDateModule,    MatPaginatorModule,    MatProgressBarModule,
    MatProgressSpinnerModule,    MatRadioModule,    MatRippleModule,    MatSelectModule,    MatSidenavModule,    MatSliderModule,    MatSlideToggleModule,    MatSnackBarModule,    MatSortModule,
    MatTableModule,    MatTabsModule,    MatToolbarModule,    MatTooltipModule,    MatStepperModule,    MatFormFieldModule ,} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StarComponent } from '../Shared/StarComponent';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProddialComponent } from './proddial/proddial.component';
import 'rxjs/add/observable/of';

export class ProductapiServiceMockStub {

  public getProducts(url: string): Observable<ProductModel[]> {
    return Observable.of([new ProductModel(1, 'Sudha', 'ARE11', '2/2/1987', 234, 2), new ProductModel(2, 'Vijay', 'ARE12', '3/3/1987', 36, 4)]);
  }

  public getProductsByName(searchBy: string): Observable<ProductModel[]> {
    var productArray = [new ProductModel(1, 'Sudha', 'ARE11', '2/2/1987', 234, 2), new ProductModel(2, 'Vijay', 'ARE12', '3/3/1987', 36, 4)];
    if (searchBy !== null || searchBy !== "") {
      productArray = productArray.filter((item: ProductModel) => {
        if (item.ProductName.toLocaleLowerCase().startsWith(searchBy.toLocaleLowerCase()))
          return item;
      });
    }
    return Observable.of(productArray);
  }
}

describe('ProductList.Component', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let service: ProductapiServiceMockStub;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent, StarComponent,ProddialComponent],
      providers: [ProductapiServiceMockStub, ProductapiService],
      imports: [BrowserAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientModule, BrowserModule,  MatAutocompleteModule,
        MatButtonModule,        MatButtonToggleModule,        MatCardModule,        MatCheckboxModule,        MatChipsModule,        MatDatepickerModule,
        MatDialogModule,        MatExpansionModule,        MatGridListModule,        MatIconModule,        MatInputModule,        MatListModule,        MatMenuModule,
        MatNativeDateModule,        MatPaginatorModule,        MatProgressBarModule,        MatProgressSpinnerModule,        MatRadioModule,        MatRippleModule,
        MatSelectModule,        MatSidenavModule,        MatSliderModule,        MatSlideToggleModule,        MatSnackBarModule,        MatSortModule,
        MatTableModule,        MatTabsModule,        MatToolbarModule,        MatTooltipModule,        MatStepperModule,        MatFormFieldModule ]
    }).overrideComponent(ProductListComponent, {
      set: {
        providers: [
          { provide: ProductapiService, useClass: ProductapiServiceMockStub },
        ]
      }
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(ProductapiServiceMockStub);
    component.pageIndex = 0;
    component.pageSize = 5;
  });

  it('successfully create ProductListComponent instance..', () => {
    component.ngOnInit();
    component.ngAfterViewInit();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('Check weather the number of records equal to 2 ', () => {
    component.ngOnInit();
    component.ngAfterViewInit();
    fixture.detectChanges();
    expect(component.filteredProducts.data.length).toBe(2);
  });
  it('Check weather search name works fine ', () => {
    component.ngOnInit();
    component.ngAfterViewInit();
    fixture.detectChanges();
    component.searchBy = 'Vijay';
    fixture.detectChanges();
    expect(component.filteredProducts.data.length).toBe(1);
  });
});

