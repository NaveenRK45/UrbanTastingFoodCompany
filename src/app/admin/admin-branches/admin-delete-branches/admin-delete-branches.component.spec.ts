import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteBranchesComponent } from './admin-delete-branches.component';

describe('AdminDeleteBranchesComponent', () => {
  let component: AdminDeleteBranchesComponent;
  let fixture: ComponentFixture<AdminDeleteBranchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeleteBranchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDeleteBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
