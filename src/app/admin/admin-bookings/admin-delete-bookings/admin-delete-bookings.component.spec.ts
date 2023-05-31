import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteBookingsComponent } from './admin-delete-bookings.component';

describe('AdminDeleteBookingsComponent', () => {
  let component: AdminDeleteBookingsComponent;
  let fixture: ComponentFixture<AdminDeleteBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeleteBookingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDeleteBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
