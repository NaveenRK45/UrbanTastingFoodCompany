import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard/admin-dashboard.component';
import { AdminViewBookingsComponent } from './admin/admin-bookings/admin-view-bookings/admin-view-bookings.component';
import { AdminAddBookingsComponent } from './admin/admin-bookings/admin-add-bookings/admin-add-bookings.component';
import { AdminDeleteBookingsComponent } from './admin/admin-bookings/admin-delete-bookings/admin-delete-bookings.component';
import { AdminConfirmedComponent } from './admin/admin-confirmed/admin-confirmed.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminAddBranchesComponent } from './admin/admin-branches/admin-add-branches/admin-add-branches.component';
import { AdminEditBranchesComponent } from './admin/admin-branches/admin-edit-branches/admin-edit-branches.component';
import { AdminViewBranchesComponent } from './admin/admin-branches/admin-view-branches/admin-view-branches.component';
import { AdminDeleteBranchesComponent } from './admin/admin-branches/admin-delete-branches/admin-delete-branches.component';
import { AdminAddSlotsComponent } from './admin/admin-slots/admin-add-slots/admin-add-slots.component';
import { AdminEditSlotsComponent } from './admin/admin-slots/admin-edit-slots/admin-edit-slots.component';
import { AdminViewSlotsComponent } from './admin/admin-slots/admin-view-slots/admin-view-slots.component';
import { AdminDeleteSlotsComponent } from './admin/admin-slots/admin-delete-slots/admin-delete-slots.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { HomePageComponent } from './Welcome-Page/home-page/home-page.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserSignupComponent } from './users/user-signup/user-signup.component';
import { UserEmailVerifyComponent } from './users/user-email-verify/user-email-verify.component';
import { UserSelectLocationComponent } from './users/user-select-location/user-select-location.component';
import { UserOrderDetailsComponent } from './users/user-order-details/user-order-details.component';
import { UserBookingsComponent } from './users/user-bookings/user-bookings.component';
import { UserCancelComponent } from './users/user-cancel/user-cancel.component';
import { UserConfirmComponent } from './users/user-confirm/user-confirm.component';

const routes: Routes = [
    { path: '', redirectTo: 'Welcome-Page', pathMatch: 'full' },
  { path: 'Welcome-Page', component: HomePageComponent },
  { path: 'admin-login', component: AdminLoginComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'user-signup',component:UserSignupComponent},
  {path:'user-emailCheck',component:UserEmailVerifyComponent},
  {path:'user-location',component:UserSelectLocationComponent},
  {path:'user-foodDetails',component:UserOrderDetailsComponent},
  {path:'user-bookings',component:UserBookingsComponent},
  {path:'user-cancel',component:UserCancelComponent},
  {path:'user-confirm',component:UserConfirmComponent},


  {path:'admin',component:AdminDashboardComponent,children:[
  {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:AdminHomeComponent},
    {path:'View-bookings',component:AdminViewBookingsComponent},
    {path:'Add-bookings',component:AdminAddBookingsComponent},
    {path:'Delete-bookings',component:AdminDeleteBookingsComponent},
    {path:'Update-bookings',component:AdminViewBookingsComponent},
    {path:'Confirmed',component:AdminConfirmedComponent},
    {path:'View-Users',component:AdminUsersComponent},
    {path:'Add-Branches',component:AdminAddBranchesComponent},
    {path:'Update-Branches',component:AdminEditBranchesComponent},
    {path:'View-Branches',component:AdminViewBranchesComponent},
    {path:'Delete-Branches',component:AdminDeleteBranchesComponent},
    {path:'Add-Slots',component:AdminAddSlotsComponent},
    {path:'Update-Slots',component:AdminEditSlotsComponent},
    {path:'View-Slots',component:AdminViewSlotsComponent},
    {path:'Delete-Slots',component:AdminDeleteSlotsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
