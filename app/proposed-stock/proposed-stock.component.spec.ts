import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposedStockComponent } from './proposed-stock.component';

describe('ProposedStockComponent', () => {
  let component: ProposedStockComponent;
  let fixture: ComponentFixture<ProposedStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposedStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposedStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
