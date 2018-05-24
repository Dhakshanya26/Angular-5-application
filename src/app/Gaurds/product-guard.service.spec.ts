import { TestBed, inject } from '@angular/core/testing';

import { ProductGuardService } from './product-guard.service';
let service;
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('ProductGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,BrowserAnimationsModule],
      providers: [ProductGuardService]
    });
    service = TestBed.get(ProductGuardService);
  });

  it('Check whether product guard service created', inject([ProductGuardService], (service1: ProductGuardService) => {
    expect(service).toBeTruthy(service1);
  }));
});
