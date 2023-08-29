import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//--------------------------------------user---------------------------------------
import { UserComponent } from './user/user.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { RegisterComponent } from './user/register/register.component';

//-----------------------------------admin------------------------------------
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './admin/menu/menu.component';
import { RewardSettingComponent } from './admin/reward-setting/reward-setting.component';
import { LuckyDrawComponent } from './admin/lucky-draw/lucky-draw.component';
import { BoardComponent } from './admin/board/board.component';
import { ResetPasswordComponent } from './admin/reset-password/reset-password.component';

//-------------------------------------home------------------------------------------
import { HomePageComponent } from './home-page/home-page.component';
import { SigninComponent } from './home-page/sign-in/signin.component';
import { RewardComponent } from './home-page/reward/reward.component';
import { SolutionComponent } from './home-page/solution/solution.component';





@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    HomePageComponent,
    SigninComponent,
    RewardComponent,
    ChangePasswordComponent,
    RegisterComponent,
    SolutionComponent,
    MenuComponent,
    RewardSettingComponent,
    LuckyDrawComponent,
    BoardComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }