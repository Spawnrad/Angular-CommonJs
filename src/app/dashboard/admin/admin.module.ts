import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedNewModule } from 'src/app/shared/share.new.module';
import { SharedToNotShareModule } from 'src/app/shared/tonotshare.module';
import { SharedLayoutModule } from '../../shared/shared.layout.module';
import { SharedModule } from '../../shared/shared.module';
import { SharedUserModule } from '../../shared/shared.user.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SharedLayoutModule,
    SharedUserModule,
    SharedNewModule,
    SharedToNotShareModule
  ],
  declarations: []
})
export class AdminModule { }