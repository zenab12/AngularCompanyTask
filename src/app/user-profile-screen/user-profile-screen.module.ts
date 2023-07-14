import { NgModule } from '@angular/core';
import { CommonModule ,NgFor} from '@angular/common';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { RouterModule } from '@angular/router';
import { UserProfileService } from './user-profile.service';
import { UserProfile } from './user-profile-screen.component';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    ProfileFormComponent,
    UserProfile,
  ],
  imports: [     
 CommonModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    NgFor,
  ],
  providers:[UserProfileService],
  exports: [RouterModule,ProfileFormComponent,UserProfile]
})
export class UserProfileScreenModule { }
