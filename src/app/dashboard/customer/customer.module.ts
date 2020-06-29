import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedToNotShareModule } from 'src/app/shared/tonotshare.module';
import { SharedUserModule } from '../../shared/shared.user.module';

@NgModule({
  imports: [
    CommonModule,
    SharedUserModule,
    SharedToNotShareModule
  ],
  declarations: []
})
export class CustomerModule { }