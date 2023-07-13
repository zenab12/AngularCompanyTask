import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ViewChild } from '@angular/core';
import { SignFormComponent } from './sign-form/sign-form.component';

@Component({
  selector: 'app-sign-up-screen',
  templateUrl: './sign-up-screen.component.html',
})
export class SignUpScreenComponent implements AfterViewChecked {
  title = 'SignUp';
  constructor(){}
  @ViewChild(SignFormComponent) register !: SignFormComponent;
  registeration:any;
  ngAfterViewChecked(): void {
  this.registeration=this.register.register;
    
  }
}
