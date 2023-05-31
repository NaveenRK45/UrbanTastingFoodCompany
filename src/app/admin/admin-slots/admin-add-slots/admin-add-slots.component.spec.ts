import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddSlotsComponent } from './admin-add-slots.component';

describe('AdminAddSlotsComponent', () => {
  let component: AdminAddSlotsComponent;
  let fixture: ComponentFixture<AdminAddSlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddSlotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
