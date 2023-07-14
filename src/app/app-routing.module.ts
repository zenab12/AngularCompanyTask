import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
{
path:"",component:AppComponent
},
{
path:'signup',loadChildren:()=>import('./sign-up-screen/sign-up-screen.module').then(m=>m.SignUpScreenModule)
},
{
path:'userProfile',loadChildren:()=>import("./user-profile-screen/user-profile-screen.module").then(m=>m.UserProfileScreenModule)
},
{
path:'confirmation',loadChildren:()=>import("./confirmation-screen/confirmation-screen.module").then(m=>m.ConfirmationScreenModule)
}
];

@NgModule({
  imports: [FormsModule , RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
