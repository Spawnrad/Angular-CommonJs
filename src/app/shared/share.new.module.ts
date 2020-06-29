import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NewComponent } from './components/new/new.component';

@NgModule({
    imports: [CommonModule],
    declarations: [NewComponent],
    exports: [NewComponent]
})
export class SharedNewModule { }
