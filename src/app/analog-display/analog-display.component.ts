import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-analog-display',
    template: `
        <div class="clock">
            <div class="time-slot">
                <app-digit [digit]="digits.col1.tens"></app-digit>
                <app-digit [digit]="digits.col1.ones"></app-digit>
            </div>
            <div class="time-slot">
                <app-digit [digit]="digits.col2.tens"></app-digit>
                <app-digit [digit]="digits.col2.ones"></app-digit>
            </div>
            <div class="time-slot">
                <app-digit [digit]="digits.col3.tens"></app-digit>
                <app-digit [digit]="digits.col3.ones"></app-digit>
            </div>
        </div>
    `,
    styleUrls: ['./analog-display.component.scss'],
})
export class AnalogDisplayComponent implements OnInit {
    @Input() digits: Digits;

    constructor() {}

    ngOnInit(): void {}
}
