import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { DashboardRouting } from "./dashboard.routing";
import { AdminComponent } from "./admin/admin.component";
import { CustomerComponent } from "./customer/customer.component";
import { CustomerGuard } from "../guard/customer.guard";
import { AdminGuard } from "../guard/admin.guard";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [AdminComponent, CustomerComponent],
  imports: [RouterModule, DashboardRouting],
  providers: [AdminGuard, CustomerGuard]
})
export class DashboardModule {}
