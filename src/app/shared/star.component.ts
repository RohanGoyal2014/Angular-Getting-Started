import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number = 4;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        console.log('Change event occurred on Star Component');
        //75 is the width set to star in span class in html
        this.starWidth = this.rating * 75/5;
    }

    onClick(): void {
        // Note that backticks are used
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}