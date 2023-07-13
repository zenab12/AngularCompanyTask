import { AfterViewChecked, Component,OnInit,ViewChild } from '@angular/core';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { UserProfileService } from './user-profile.service';

@Component({
  selector: 'app-user-profile-screen',
  templateUrl: './user-profile-screen.component.html',
})
export class UserProfile implements AfterViewChecked{
  title = 'userProfile';
  profileForm:any;
  @ViewChild(ProfileFormComponent) profile !: ProfileFormComponent;
  constructor(){}
  ngAfterViewChecked(): void {
    this.profileForm=this.profile.profile; 
  }
  
  
}
