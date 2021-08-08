import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposedCarrierComponent } from './proposed-carrier.component';

describe('ProposedCarrierComponent', () => {
  let component: ProposedCarrierComponent;
  let fixture: ComponentFixture<ProposedCarrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposedCarrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposedCarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
