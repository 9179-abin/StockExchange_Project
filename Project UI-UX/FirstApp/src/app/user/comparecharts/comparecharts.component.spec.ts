import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparechartsComponent } from './comparecharts.component';

describe('ComparechartsComponent', () => {
  let component: ComparechartsComponent;
  let fixture: ComponentFixture<ComparechartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparechartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparechartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
