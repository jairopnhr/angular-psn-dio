import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() gameCover:string = ''
  @Input() gamePrice:string = ''
  @Input() gameType:string = ''
  @Input() gameLabel:string = ''
}
