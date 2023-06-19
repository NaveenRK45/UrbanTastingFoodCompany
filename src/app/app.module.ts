import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard/admin-dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AdminAddBookingsComponent } from './admin/admin-bookings/admin-add-bookings/admin-add-bookings.component';
import { AdminViewBookingsComponent } from './admin/admin-bookings/admin-view-bookings/admin-view-bookings.component';
import { AdminDeleteBookingsComponent } from './admin/admin-bookings/admin-delete-bookings/admin-delete-bookings.component';
import { EditBookingsComponent } from './admin/admin-bookings/edit-bookings/edit-bookings.component';
import { AdminConfirmedComponent } from './admin/admin-confirmed/admin-confirmed.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminAddBranchesComponent } from './admin/admin-branches/admin-add-branches/admin-add-branches.component';
import { AdminViewBranchesComponent } from './admin/admin-branches/admin-view-branches/admin-view-branches.component';
import { AdminDeleteBranchesComponent } from './admin/admin-branches/admin-delete-branches/admin-delete-branches.component';
import { AdminEditBranchesComponent } from './admin/admin-branches/admin-edit-branches/admin-edit-branches.component';
import { AdminAddSlotsComponent } from './admin/admin-slots/admin-add-slots/admin-add-slots.component';
import { AdminEditSlotsComponent } from './admin/admin-slots/admin-edit-slots/admin-edit-slots.component';
import { AdminDeleteSlotsComponent } from './admin/admin-slots/admin-delete-slots/admin-delete-slots.component';
import { AdminViewSlotsComponent } from './admin/admin-slots/admin-view-slots/admin-view-slots.component';
import { MaterialModuleModule } from './shared/Modules/material-module/material-module.module';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { HomePageComponent } from './Welcome-Page/home-page/home-page.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserSignupComponent } from './users/user-signup/user-signup.component';
import { UserDashboardComponent } from './users/user-dashboard/user-dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { UserEmailVerifyComponent } from './users/user-email-verify/user-email-verify.component';
import { UserSelectLocationComponent } from './users/user-select-location/user-select-location.component';
import { UserOrderDetailsComponent } from './users/user-order-details/user-order-details.component';
import { UserBookingsComponent } from './users/user-bookings/user-bookings.component';
import { UserConfirmComponent } from './users/user-confirm/user-confirm.component';
import { UserCancelComponent } from './users/user-cancel/user-cancel.component';
import { MainHomeComponent } from './Welcome-Page/main-home/main-home.component';
import { UserForgotPasswordComponent } from './users/user-forgot-password/user-forgot-password.component';
import { AdminViewUserProfileComponent } from './admin/admin-bookings/admin-view-user-profile/admin-view-user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    AdminAddBookingsComponent,
    AdminViewBookingsComponent,
    AdminDeleteBookingsComponent,
    EditBookingsComponent,
    AdminConfirmedComponent,
    AdminUsersComponent,
    AdminAddBranchesComponent,
    AdminViewBranchesComponent,
    AdminDeleteBranchesComponent,
    AdminEditBranchesComponent,
    AdminAddSlotsComponent,
    AdminEditSlotsComponent,
    AdminDeleteSlotsComponent,
    AdminViewSlotsComponent,
    AdminHomeComponent,
    AdminLoginComponent,
    HomePageComponent,
    UserLoginComponent,
    UserSignupComponent,
    UserDashboardComponent,
    UserEmailVerifyComponent,
    UserSelectLocationComponent,
    UserOrderDetailsComponent,
    UserBookingsComponent,
    UserConfirmComponent,
    UserCancelComponent,
    MainHomeComponent,
    UserForgotPasswordComponent,
    AdminViewUserProfileComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MaterialModuleModule,
    MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
