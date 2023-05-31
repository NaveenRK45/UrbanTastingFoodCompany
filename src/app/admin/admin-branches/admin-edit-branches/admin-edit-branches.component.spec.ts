import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditBranchesComponent } from './admin-edit-branches.component';

describe('AdminEditBranchesComponent', () => {
  let component: AdminEditBranchesComponent;
  let fixture: ComponentFixture<AdminEditBranchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditBranchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEditBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
