import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { getAllZeros } from '../analog-display/getAllZeros';
import { ToolService } from '../tools.service';

@Component({
    selector: 'app-clock',
    template: `
        <div class="content">
            <app-analog-display
                [digits]="digits"
                [tool]="'clock'"
            ></app-analog-display>
        </div>
    `,
    styleUrls: ['clock.component.scss'],
})
export class ClockComponent implements OnInit {
    digits: Digits = getAllZeros();

    constructor(private toolService: ToolService) {}

    ngOnInit() {
        const tick = Observable.create((observer) => {
            setInterval(() => {
                observer.next(new Date());
            }, 1000);
        });
        tick.subscribe((date) => {
            this.toolService.parse(this.digits, date.getHours(), 'col1');
            this.toolService.parse(this.digits, date.getMinutes(), 'col2');
            this.toolService.parse(this.digits, date.getSeconds(), 'col3');
        });
    }
}
