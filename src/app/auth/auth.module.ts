import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedLayoutModule } from '../shared/shared.layout.module';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth.component';
import { AuthRouting } from './auth.routing';

@NgModule({
  imports: [
    CommonModule,
    AuthRouting,
    SharedModule,
    SharedLayoutModule
  ],
  declarations: [AuthComponent]
})
export class AuthModule { }