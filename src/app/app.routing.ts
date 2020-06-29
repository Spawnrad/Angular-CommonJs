import { RouterModule, Routes } from "@angular/router";
import { HelloComponent } from "./hello.component";
import { AuthGuard } from "./guard/auth.guard";

export const APP_ROUTES: Routes = [
    { path: "", component: HelloComponent },
  {
    path: "dashboard",
    loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule),
    canLoad: [AuthGuard]
  },
  {
    path: "",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },

];

export const AppRouting = RouterModule.forRoot(APP_ROUTES, {
  initialNavigation: "enabled"
});
