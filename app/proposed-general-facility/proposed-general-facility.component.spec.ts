import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposedGeneralFacilityComponent } from './proposed-general-facility.component';

describe('ProposedGeneralFacilityComponent', () => {
  let component: ProposedGeneralFacilityComponent;
  let fixture: ComponentFixture<ProposedGeneralFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposedGeneralFacilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposedGeneralFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
