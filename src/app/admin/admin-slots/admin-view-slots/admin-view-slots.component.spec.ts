import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewSlotsComponent } from './admin-view-slots.component';

describe('AdminViewSlotsComponent', () => {
  let component: AdminViewSlotsComponent;
  let fixture: ComponentFixture<AdminViewSlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewSlotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
