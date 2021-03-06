import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedToNotShareModule } from 'src/app/shared/tonotshare.module';
import { SharedLayoutModule } from '../../shared/shared.layout.module';
import { SharedModule } from '../../shared/shared.module';
import { SharedUserModule } from '../../shared/shared.user.module';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SharedLayoutModule,
    SharedUserModule,
    SharedToNotShareModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }