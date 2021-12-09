import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-analog-display',
    template: `
        <div class="d-flex container-fluid clock-container">
            <div class="clock">
                <div class="time-slot">
                    <app-digit [digit]="digits.hours.tens"></app-digit>
                    <app-digit [digit]="digits.hours.ones"></app-digit>
                </div>
                <div class="time-slot">
                    <app-digit [digit]="digits.minutes.tens"></app-digit>
                    <app-digit [digit]="digits.minutes.ones"></app-digit>
                </div>
                <div class="time-slot">
                    <app-digit [digit]="digits.seconds.tens"></app-digit>
                    <app-digit [digit]="digits.seconds.ones"></app-digit>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./analog-display.component.scss'],
})
export class AnalogDisplayComponent implements OnInit {
    @Input() digits: {
        hours: { tens: number; ones: number };
        seconds: { tens: number; ones: number };
        minutes: { tens: number; ones: number };
    };

    constructor() {}

    ngOnInit(): void {}
}
