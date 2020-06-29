import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminGuard } from "../guard/admin.guard";
import { CustomerGuard } from "../guard/customer.guard";
import { SharedToNotShareModule } from '../shared/tonotshare.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouting } from "./dashboard.routing";

@NgModule({
  declarations: [DashboardComponent],
  imports: [RouterModule, DashboardRouting, SharedToNotShareModule],
  providers: [AdminGuard, CustomerGuard]
})
export class DashboardModule { }
