import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddBranchesComponent } from './admin-add-branches.component';

describe('AdminAddBranchesComponent', () => {
  let component: AdminAddBranchesComponent;
  let fixture: ComponentFixture<AdminAddBranchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddBranchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
