import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HandleRequestsService } from './Services/handle-requests.service';
import { SignUpScreenModule } from './sign-up-screen/sign-up-screen.module';
import { SharedModule } from './shared/shared.module';
import { UserProfileScreenModule } from './user-profile-screen/user-profile-screen.module';
import { ConfirmationScreenModule } from './confirmation-screen/confirmation-screen.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { HttpClientModule } from '@angular/common/http';
import { SvgComponent } from './svgComponents/signupSvg.component';
import { ProfileSvgComponent } from './svgComponents/profileSvg.component';
import { ConfirmationSvgComponent } from './svgComponents/confirmationSvg.component';
@NgModule({
  declarations: [
    AppComponent,
    SvgComponent,
    ProfileSvgComponent,
    ConfirmationSvgComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignUpScreenModule,
    UserProfileScreenModule,
    ConfirmationScreenModule,
    SharedModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
    HandleRequestsService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
