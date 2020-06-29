import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

export const AUTH_ROUTES: Routes = [
  { path: 'login', component: AuthComponent },
];

export const AuthRouting = RouterModule.forChild(AUTH_ROUTES);
