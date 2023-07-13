import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SignFormComponent } from './sign-form/sign-form.component';
import { SignupService } from './signup.service';
import { SignUpScreenComponent } from './sign-up-screen.component';
import { StepperComponent } from '../stepper/stepper.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';

// const routes: Routes = [
//   {
//     path: '',
//     component: SignUpScreenComponent
//   }
// ];


@NgModule({
  declarations: [
    SignFormComponent,
    SignUpScreenComponent,
  ],
  imports: 
  [
   CommonModule,
    SharedModule,
    // RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatIconModule
  ],
  providers:[SignupService],
  exports: [RouterModule,SignUpScreenComponent]
  
})
export class SignUpScreenModule { }
