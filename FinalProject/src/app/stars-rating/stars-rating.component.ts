import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars-rating',
  templateUrl: './stars-rating.component.html',
  styleUrl: './stars-rating.component.css'
})
export class StarsRatingComponent implements OnInit {
  @Input() rating:number = 0;
  fullStars:number = 0;
  halfStar:boolean = false;
  emptyStars:number = 5;

  ngOnInit() {
    this.fullStars = Math.floor(this.rating);
    this.halfStar = this.rating - this.fullStars >= 0.5;
    this.emptyStars = 5 - this.fullStars - (this.halfStar ? 1 : 0);
  }
}
