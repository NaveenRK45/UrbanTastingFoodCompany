import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditSlotsComponent } from './admin-edit-slots.component';

describe('AdminEditSlotsComponent', () => {
  let component: AdminEditSlotsComponent;
  let fixture: ComponentFixture<AdminEditSlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditSlotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEditSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
