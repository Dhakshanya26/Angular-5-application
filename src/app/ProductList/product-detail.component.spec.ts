import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetail.ComponentComponent } from './product-detail.component.component';

describe('ProductDetail.ComponentComponent', () => {
  let component: ProductDetail.ComponentComponent;
  let fixture: ComponentFixture<ProductDetail.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetail.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetail.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
