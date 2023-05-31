import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddBookingsComponent } from './admin-add-bookings.component';

describe('AdminAddBookingsComponent', () => {
  let component: AdminAddBookingsComponent;
  let fixture: ComponentFixture<AdminAddBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddBookingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
