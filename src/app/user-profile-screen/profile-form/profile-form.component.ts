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
  
  ngOnInit(): void {
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
    
    
   //get all countries from service
    this.countries = this.profileService.getAll();
    this.filteredCountries = this.profileForm.get('address')?.valueChanges.pipe(
      startWith(''),
      map(value => this.getFiltered(value || '')),
    );
    this.filteredCountries.subscribe((data:any)=>{
      console.log(data);
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
  getFiltered(value:any){
  this.filteredCountries = this.profileService.getFiltered(value); 
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
        if (this.profileForm.controls[key].value.length === 0) {
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
