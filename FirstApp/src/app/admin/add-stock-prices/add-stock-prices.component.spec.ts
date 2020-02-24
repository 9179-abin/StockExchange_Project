import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStockPricesComponent } from './add-stock-prices.component';

describe('AddStockPricesComponent', () => {
  let component: AddStockPricesComponent;
  let fixture: ComponentFixture<AddStockPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStockPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStockPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
