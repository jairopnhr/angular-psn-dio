import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.css'
})
export class CardPricingComponent {
@Input() gamePrice:string ="129.85";
@Input() gameType:string = "Digital PS4"
}
