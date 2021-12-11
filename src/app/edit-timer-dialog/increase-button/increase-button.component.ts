import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-increase-button',
    template: `
        <button mat-button (click)="onClick()">
            <svg id="arrow_drop_up_black_24dp" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path id="Path_3" data-name="Path 3" d="M0,0H24V24H0Z" fill="none"/>
                <path id="Path_4" data-name="Path 4" d="M7,14l5-5,5,5Z"/>
            </svg>
        </button>
    `,
    styleUrls: ['./increase-button.component.scss']
})
export class IncreaseButtonComponent implements OnInit {
    @Input() col: string;
    @Output() increase = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit(): void {
    }

    onClick() {
        this.increase.emit(this.col);
    }
}
