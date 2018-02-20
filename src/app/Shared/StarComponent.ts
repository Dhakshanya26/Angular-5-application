import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'star-rating',
  templateUrl: './StarComponent.html',
  styleUrls: ['./StarComponent.scss'],
})
export class StarComponent implements OnChanges,OnInit {
  ngOnInit(): void {
    this.selectedRating = this.rating;
  }
  selectedRating: number;
  @Input() rating: number;
  @Input() showAllStars: boolean;
  width: number;
  @Output() ratingClicked: EventEmitter<number> = new EventEmitter<number>();
 
  ngOnChanges(): void {
    this.width = this.rating * 86/5;
  }

  onClick(rating: number): void {
  
    this.selectedRating = rating;
    this.ratingClicked.emit(rating);
  }
}
