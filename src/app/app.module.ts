import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRouting } from './app.routing';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports:      [ BrowserModule, RouterModule, FormsModule, AppRouting ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthGuard]
})
export class AppModule { }
