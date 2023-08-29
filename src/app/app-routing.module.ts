import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SigninComponent } from './home-page/sign-in/signin.component';
import { RewardComponent } from './home-page/reward/reward.component';
import { RegisterComponent } from './user/register/register.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { SolutionComponent } from './home-page/solution/solution.component';
import { MenuComponent } from './admin/menu/menu.component';
import { RewardSettingComponent } from './admin/reward-setting/reward-setting.component';
import { LuckyDrawComponent } from './admin/lucky-draw/lucky-draw.component';
import { BoardComponent } from './admin/board/board.component';
import { ResetPasswordComponent } from './admin/reset-password/reset-password.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  //-----------------------user------------------------
  {path: 'user', component:UserComponent },
  {path: 'register', component:RegisterComponent},
  {path: 'change-password', component:ChangePasswordComponent},

//---------------------------admin----------------------
  {path: 'admin', component:AdminComponent },
  {path: 'menu', component:MenuComponent},
  {path: 'reward-setting', component:RewardSettingComponent},
  {path: 'lucky-draw', component:LuckyDrawComponent},
  {path: 'board', component:BoardComponent},
  {path: 'reset-password', component:ResetPasswordComponent},

//-----------------------------home---------------------------
  {path: 'home-page', component:HomePageComponent},
  {path: 'sign-in', component:SigninComponent},
  {path: 'reward', component:RewardComponent},
  {path: 'solution', component:SolutionComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }