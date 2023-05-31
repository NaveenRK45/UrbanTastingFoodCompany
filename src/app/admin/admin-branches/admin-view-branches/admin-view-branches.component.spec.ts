import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewBranchesComponent } from './admin-view-branches.component';

describe('AdminViewBranchesComponent', () => {
  let component: AdminViewBranchesComponent;
  let fixture: ComponentFixture<AdminViewBranchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewBranchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
