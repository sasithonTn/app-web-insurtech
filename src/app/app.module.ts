import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//--------------------------------------primeng---------------------------------------
import { CalendarModule } from 'primeng/calendar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
//--------------------------------------user---------------------------------------
import { UserComponent } from './user/user.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { RegisterComponent } from './user/register/register.component';

//-----------------------------------admin------------------------------------
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './admin/menu/menu.component';
import { RewardSettingComponent } from './admin/reward-setting/reward-setting.component';
import { LuckyDrawComponent } from './admin/lucky-draw/lucky-draw.component';
import { ResetPasswordComponent } from './admin/reset-password/reset-password.component';

//-------------------------------------home------------------------------------------
import { HomePageComponent } from './home-page/home-page.component';
import { SigninComponent } from './home-page/sign-in/signin.component';
import { RewardComponent } from './home-page/reward/reward.component';
import { SolutionComponent } from './home-page/solution/solution.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ContentComponent } from './component/content/content.component';
import { DialogRewardComponent } from './dialog-reward/dialog-reward.component';



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
    ResetPasswordComponent,
    NavbarComponent,
    ContentComponent,
    DialogRewardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    BrowserAnimationsModule ,
    RippleModule,
    CardModule,
    CarouselModule,

  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
