import { TestBed, ComponentFixture } from '@angular/core/testing'; // 1
import { ProfileFormComponent } from './profile-form.component';
import { UserProfileService } from '../user-profile.service';
import { MatAutocomplete , MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';

describe('user profile form', () => { 
    let component: ProfileFormComponent;
    let fixture: ComponentFixture<ProfileFormComponent>;
  beforeEach(async() => { // 3
   await TestBed.configureTestingModule({
      declarations: [
        ProfileFormComponent,
        MatAutocomplete
      ],
      imports:[ReactiveFormsModule,MatAutocompleteModule],
      providers:[{provide:UserProfileService,useValue:jasmine.createSpyObj('UserProfileService',['getFiltered,getAll'])}]
    }).compileComponents();
  });
  
  beforeEach(()=>{
      fixture = TestBed.createComponent(ProfileFormComponent);
      component=fixture.componentInstance;
      fixture.detectChanges();
  })

  it('should create the app', () => { // 4
    const fixture = TestBed.createComponent(ProfileFormComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

 
});