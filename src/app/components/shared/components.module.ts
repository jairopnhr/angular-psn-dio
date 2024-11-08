import { NgModule } from "@angular/core";
import { MenuBarComponent } from "../menu-bar/menu-bar.component";
import { CommonModule } from "@angular/common";
import { CardComponentModule } from "../card/shared/card.module";

@NgModule({
    declarations:[MenuBarComponent],
    imports:[CommonModule ,CardComponentModule],
    exports:[MenuBarComponent,CardComponentModule]
})
export  class ComponentsModule{}