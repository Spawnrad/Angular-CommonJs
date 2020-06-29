import { RouterModule, Routes } from "@angular/router";
import { AdminGuard } from "../guard/admin.guard";
import { CustomerGuard } from '../guard/customer.guard';
import { DashboardComponent } from "./dashboard.component";

export const DASH_ROUTES: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "admin",
        loadChildren: () =>
          import("./admin/admin.module").then(m => m.AdminModule),
        canLoad: [AdminGuard]
      },
      {
        path: "admin",
        loadChildren: () =>
          import("./customer/customer.module").then(m => m.CustomerModule),
        canLoad: [CustomerGuard]
      }
    ]
  }
];

export const DashboardRouting = RouterModule.forChild(DASH_ROUTES);
