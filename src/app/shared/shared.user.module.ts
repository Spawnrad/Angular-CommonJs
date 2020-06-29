import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UserComponent } from "./components/user/user.component";

@NgModule({
  imports: [CommonModule],
  declarations: [UserComponent],
  exports: [UserComponent]
})
export class SharedUserModule { }
