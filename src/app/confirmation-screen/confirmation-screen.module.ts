import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmationService } from './confirmation.service';
import { confirmationScreen } from './confirmation-screen.component';
import { MatIconModule } from '@angular/material/icon';
// const routes: Routes = [
//   {
//     path: '',
//     component: FinalReviewComponent
//   }
// ];

@NgModule({
  declarations: [
    confirmationScreen
  ],
  imports: [  CommonModule,
    MatIconModule
    // RouterModule.forChild(routes)
  ],
  providers:[
  ConfirmationService
  ],
  exports: [RouterModule,confirmationScreen]
})
export class ConfirmationScreenModule { }
