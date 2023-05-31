import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConfirmedComponent } from './admin-confirmed.component';

describe('AdminConfirmedComponent', () => {
  let component: AdminConfirmedComponent;
  let fixture: ComponentFixture<AdminConfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConfirmedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
