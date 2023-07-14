import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProfileService } from '../user-profile.service';
import { Observable, count, debounceTime, distinctUntilChanged, map, startWith } from 'rxjs';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router,private profileService:UserProfileService) {}
  profileForm!: FormGroup;
  flag = false;
  profile: any=!null;
  countries: any[] = [];
  filteredCountries:any ;
  
  public async ngOnInit(): Promise<void> {
    this.profileForm = this.fb.group({
      firstName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[a-zA-Z]*$/),
        ]),
      ],
      lastName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[a-zA-Z]*$/),
        ]),
      ],
      age: [
        '',
        Validators.compose([
          Validators.required,
          Validators.min(8),
          Validators.max(70),
          Validators.pattern(/^[0-9]*$/),
        ]),
      ],
      address: [null, Validators.required],
      cob: ['', Validators.required],
    });
    
    
    this.countries = this.profileService.getAll();
    this.filteredCountries = this.profileForm.get('cob')?.valueChanges.pipe(
      startWith(''),
      map(value => this.getFiltered(value || '')),
    );
    this.filteredCountries.subscribe((data:any)=>{
});
        
    
  }

  
  
  get firstName() {
    return this.profileForm.get('firstName');
  }
  
  get lastName() {
    return this.profileForm.get('lastName');
  }
  
  get age() {
    return this.profileForm.get('age');
  }
  
  get address() {
    return this.profileForm.get('address');
  }
  
  get cob() {
    return this.profileForm.get('cob');
  }
  
   getFiltered(value:any): Promise<any>{
   if(value.length > 2)
   {
    this.filteredCountries =  this.profileService.getFiltered(value); 
   }else if (value.length>0 && value.length<3)
   {
    this.filteredCountries = this.countries.filter(v=>v.toLowerCase().includes(value.toLowerCase()));
   }else  {
    this.filteredCountries = this.profileService.getAll();}
  return this.filteredCountries;

}

  back() {
    window.history.back();
  }
  onSubmit(e: Event) {
    e.preventDefault();
    if (this.profileForm.valid) {
      this.router.navigateByUrl('/confirmation');
      this.flag = false;

      this.profile = this.profileForm.value;
    } else {
      this.profileForm.markAllAsTouched();
      for (const key of Object.keys(this.profileForm.controls)) {
        if (this.profileForm.controls[key].value?.length === 0) {
          this.profileForm.controls[key].markAsDirty();
        }
      }
      setTimeout(() => {
        this.flag = false;
      }, 500);
    }
    return false;
  }
}
