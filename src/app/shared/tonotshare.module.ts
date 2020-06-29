import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ToNotShareComponent } from './components/tonotshare/tonotshare.component';

@NgModule({
    imports: [CommonModule],
    declarations: [ToNotShareComponent],
    exports: [ToNotShareComponent]
})
export class SharedToNotShareModule { }
