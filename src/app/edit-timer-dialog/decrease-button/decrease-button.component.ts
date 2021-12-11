import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-decrease-button',
    template: `
        <button mat-button (click)="onClick()">
            <svg id="arrow_drop_down_black_24dp" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path id="Path_1" data-name="Path 1" d="M0,0H24V24H0Z" fill="none"/>
                <path id="Path_2" data-name="Path 2" d="M7,10l5,5,5-5Z"/>
            </svg>
        </button>
    `,
    styleUrls: ['./decrease-button.component.scss']
})
export class DecreaseButtonComponent implements OnInit {
    @Input() col: string;
    @Output() decrease = new EventEmitter<string>();


    constructor() {
    }

    ngOnInit(): void {
    }

    onClick() {
        this.decrease.emit(this.col);
    }

}
