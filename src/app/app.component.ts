import {
  AfterViewChecked,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { SignUpScreenComponent } from './sign-up-screen/sign-up-screen.component';
import { UserProfile } from './user-profile-screen/user-profile-screen.component';
import { HandleRequestsService } from './Services/handle-requests.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // standalone:true,

  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          transform: 'translate3d(0, 0, 0)',
        })
      ),
      state(
        'out',
        style({
          transform: 'translate3d(100%, 0, 0)',
        })
      ),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out')),
    ]),
  ],
})
export class AppComponent implements OnInit, AfterViewChecked {
  title = 'app';
  currentRoute: any = '';
  constructor(
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: HandleRequestsService
  ) {}

  ngOnInit(): any {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        console.log(this.currentRoute); //routename
      }
    });
  }
  paths = ['/signUp', '/userProfile', '/confirmation'];

  isLinear = false;
  signupForm!: any;
  profileForm!: any;

  @ViewChild(SignUpScreenComponent) registeration!: SignUpScreenComponent;
  @ViewChild(UserProfile) profile!: UserProfile;

  ngAfterViewChecked() {
    setTimeout(() => {
      this.signupForm = this.registeration?.registeration;
      this.profileForm = this.profile?.profileForm;
    }, 0);
  }
}
