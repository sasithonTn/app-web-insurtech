import { NgModule } from '@angular/core';
import { RouterModule, Route} from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SigninComponent } from './home-page/sign-in/signin.component';
import { RegisterComponent } from './user/register/register.component';
import { RewardComponent } from './home-page/reward/reward.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { MenuComponent } from './admin/menu/menu.component';
import { RewardSettingComponent } from './admin/reward-setting/reward-setting.component';
import { LuckyDrawComponent } from './admin/lucky-draw/lucky-draw.component';
import { ResetPasswordComponent } from './admin/reset-password/reset-password.component';
import { ListRewardComponent } from './home-page/list-reward/list-reward.component';
import { AdminGuard } from './Guards/admin.guard';
import { UserGuard } from './Guards/user.guard';
import { AuthService } from './Guards/auth.service';

const userRoutes: Route[] = [
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthService, UserGuard],
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate: [AuthService, UserGuard],
  },
];

const adminRoutes: Route[] = [
  {
    path: 'menu',
    component: MenuComponent,
    canActivate: [AuthService, AdminGuard],
  },
  {
    path: 'reward-setting',
    component: RewardSettingComponent,
    canActivate: [AuthService, AdminGuard],
  },
  {
    path: 'lucky-draw',
    component: LuckyDrawComponent,
    canActivate: [AuthService, AdminGuard],
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    canActivate: [AuthService, AdminGuard],
  },
];

const homeRoutes: Route[] = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'sign-in', component: SigninComponent },
  { path: 'list-reward', component: ListRewardComponent },
  { path: 'reward', component: RewardComponent },
];

const routes: Route[] = [
  { path: '', redirectTo: 'home-page', pathMatch: 'prefix' },
  ...userRoutes,
  ...adminRoutes,
  ...homeRoutes,
];

@NgModule({
  imports: [RouterModule.(routes)forRoot],
  exports: [RouterModule],
})
export class AppRoutingModule {}
