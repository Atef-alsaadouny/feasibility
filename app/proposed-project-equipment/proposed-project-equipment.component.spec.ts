import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposedProjectEquipmentComponent } from './proposed-project-equipment.component';

describe('ProposedProjectEquipmentComponent', () => {
  let component: ProposedProjectEquipmentComponent;
  let fixture: ComponentFixture<ProposedProjectEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposedProjectEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposedProjectEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
