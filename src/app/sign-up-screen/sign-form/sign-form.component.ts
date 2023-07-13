import { Component,OnInit  } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { PasswordValidators } from "./password-validators";
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.scss']
})
export class SignFormComponent implements OnInit {
  signupForm!: FormGroup;

constructor( private fb:FormBuilder,private router: Router) { };
ngOnInit() {
this.signupForm = this.fb.group({
  username: ['',Validators.compose([Validators.required,Validators.minLength(8),Validators.pattern('^[a-z0-9]+$'),Validators.maxLength(20)])],
  fullname: ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.maxLength(20)])],
  password: ['', Validators.compose([
    Validators.required,
    Validators.minLength(8),
    PasswordValidators.patternValidator(new RegExp("(?=.*[0-9])"), {
      requiresDigit: true
    }),
    PasswordValidators.patternValidator(new RegExp("(?=.*[A-Z])"), {
      requiresUppercase: true
    }),
    PasswordValidators.patternValidator(new RegExp("(?=.*[a-z])"), {
      requiresLowercase: true
    }),
    PasswordValidators.patternValidator(new RegExp("(?=.*[$@^!%*?&\"\'~_-])"), {
      requiresSpecialChars: true
    })
  ])],
});
}

get username() { return this.signupForm.get('username'); }
get fullname() { return this.signupForm.get('fullname'); }
get password() { return this.signupForm.get('password'); }

flag=false;
register:any={};
isShow:any=false;
togglePassword()
{
this.isShow = !this.isShow;
}

setType(){
return this.isShow?'text':'password'
}

onSubmit() {
  this.flag=true;
  if (this.signupForm.valid) {
  this.register={
  'username':this.username?.value,
  'fullname':this.fullname?.value,
  'password':this.password?.value
  }
    this.router.navigateByUrl('/userProfile');
    this.flag=false;

  } else {
    this.signupForm.markAllAsTouched();
    for (const key of Object.keys(this.signupForm.controls)) {
      if(this.signupForm.controls[key].value.length === 0) {
        this.signupForm.controls[key].markAsDirty();
      }
      
    }
    setTimeout(()=>{
      this.flag=false;
    },500)

  }
  }
}