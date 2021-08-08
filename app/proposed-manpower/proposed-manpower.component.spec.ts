import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposedManpowerComponent } from './proposed-manpower.component';

describe('ProposedManpowerComponent', () => {
  let component: ProposedManpowerComponent;
  let fixture: ComponentFixture<ProposedManpowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposedManpowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposedManpowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
