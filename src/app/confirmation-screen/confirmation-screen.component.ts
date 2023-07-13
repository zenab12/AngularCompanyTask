import { AfterViewChecked, Component, DoCheck, Input, OnChanges } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-screen',
  templateUrl: './confirmation-screen.component.html',
})
export class confirmationScreen implements OnChanges {
constructor(private router: Router){}
@Input() registeration:any={};
@Input() profileForm:any={};
hashedPass:any;
ngOnChanges(): void {
setTimeout(()=>{
    console.log(this.registeration);
    console.log(this.profileForm);
},0)
  this.hashedPass = ('*').repeat(this?.registeration?.password.length)

}
back()
{
window.history.back()
}

confirmation()
{
    window.location.replace('/signup');

}

isShow:any=false;

togglePassword()
{
this.isShow = !this.isShow;
}

setType(){
return this.isShow?'text':'password'
}


}
