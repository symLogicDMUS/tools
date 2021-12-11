import { Component, Input } from '@angular/core';
import { ToolService } from '../tools.service';

@Component({
    selector: 'app-analog-display',
    template: `
        <div class="clock">
            <div class="time-slot">
                <app-digit [digit]="digits.col1.tens" [tool]="tool"></app-digit>
                <app-digit [digit]="digits.col1.ones" [tool]="tool"></app-digit>
            </div>
            <div class="time-slot">
                <app-digit [digit]="digits.col2.tens" [tool]="tool"></app-digit>
                <app-digit [digit]="digits.col2.ones" [tool]="tool"></app-digit>
            </div>
            <div class="time-slot">
                <app-digit [digit]="digits.col3.tens" [tool]="tool"></app-digit>
                <app-digit [digit]="digits.col3.ones" [tool]="tool"></app-digit>
            </div>
        </div>
    `,
    styleUrls: ['./analog-display.component.scss'],
})
export class AnalogDisplayComponent {
    @Input() digits: Digits;
    @Input() tool: string;

    constructor() {}
}
