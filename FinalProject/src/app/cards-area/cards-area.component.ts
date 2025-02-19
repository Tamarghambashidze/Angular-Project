import { Component } from '@angular/core';
import { CardsService } from '../shared/cards.service';

@Component({
  selector: 'app-cards-area',
  templateUrl: './cards-area.component.html',
  styleUrl: './cards-area.component.css'
})
export class CardsAreaComponent {
  public cardsList:any[] = [];
  public filteredCardsList:any;
  public buttonsList:any[] = [
    {
      name:'eat',
      imgUrl:"https://static.wixstatic.com/media/3963cf22f5e14a25a77ebe37298a8d3b.png/v1/fill/w_80,h_80,al_c,q_85,enc_auto/3963cf22f5e14a25a77ebe37298a8d3b.png"
    },
    {
      name:'play',
      imgUrl:"https://static.wixstatic.com/media/a828568f6b7d48b3b874b5114f521d6e.png/v1/fill/w_80,h_80,al_c,q_85,enc_auto/a828568f6b7d48b3b874b5114f521d6e.png"
    },
    {
      name:'relax',
      imgUrl:"https://static.wixstatic.com/media/c01f34f8035346eb80bb2b29ab7dc702.png/v1/fill/w_80,h_80,al_c,q_85,enc_auto/c01f34f8035346eb80bb2b29ab7dc702.png"
    }
  ]
 
  constructor(private service:CardsService){
    this.cardsList = service.getAllCards();
    this.filteredCardsList = this.cardsList;
  }

  onBtnClick(type:string){
    this.filteredCardsList = this.service.getFilteredCards(type);
  }
  onBtnDoubleClick(){
    this.filteredCardsList = this.cardsList;
  }
}
