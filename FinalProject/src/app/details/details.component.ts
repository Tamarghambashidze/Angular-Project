import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../shared/cards.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  public card:any;
  public cardTItle!:string;

  constructor(private route:ActivatedRoute, private service:CardsService){
    this.route.params.subscribe((data:any) => this.cardTItle = data.name);
    this.card = this.service.getAllCards().find(card => card.title == this.cardTItle);
  }
}
