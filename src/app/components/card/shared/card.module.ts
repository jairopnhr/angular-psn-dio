import { NgModule } from "@angular/core";
import { CardComponent } from "../card.component";
import { CardLabelComponent } from "../card-label/card-label.component";
import { CardPricingComponent } from "../card-pricing/card-pricing.component";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations:[CardComponent,CardLabelComponent,CardPricingComponent],
    imports:[CommonModule],
    exports:[CardComponent]
})
export class CardComponentModule{}