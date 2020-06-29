import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SharedLayoutModule } from '../../shared/shared.layout.module';
import { SharedUserModule } from '../../shared/shared.user.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SharedLayoutModule,
    SharedUserModule
  ],
  declarations: []
})
export class AdminModule { }