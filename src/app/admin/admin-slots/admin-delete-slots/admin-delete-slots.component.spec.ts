import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteSlotsComponent } from './admin-delete-slots.component';

describe('AdminDeleteSlotsComponent', () => {
  let component: AdminDeleteSlotsComponent;
  let fixture: ComponentFixture<AdminDeleteSlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeleteSlotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDeleteSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
