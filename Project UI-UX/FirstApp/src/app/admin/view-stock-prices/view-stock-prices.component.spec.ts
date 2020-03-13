import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStockPricesComponent } from './view-stock-prices.component';

describe('ViewStockPricesComponent', () => {
  let component: ViewStockPricesComponent;
  let fixture: ComponentFixture<ViewStockPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStockPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStockPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
