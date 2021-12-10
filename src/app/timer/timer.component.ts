import {interval, Observable, Subscription} from "rxjs";
import {ToolService} from "../tools.service";
import {Times} from "../analog-display/Times";
import {Component, Input, OnInit} from '@angular/core';
import {getAllZeros} from "../analog-display/getAllZeros";

@Component({
    selector: 'app-timer',
    template: `
        <div class="container content">
            <app-analog-display [digits]="digits"></app-analog-display>
        </div>
    `,
    styleUrls: ['../app.component.scss'],
})
export class TimerComponent implements OnInit {
    @Input() timeObj: Times;
    minutes: number;
    seconds: number;
    milliseconds: number;
    digits: Digits = getAllZeros();
    timerSub: Subscription;

    constructor(private toolService: ToolService) {}

    ngOnInit(): void {
        this.minutes = this.timeObj.getMinutes();
        this.seconds = this.timeObj.getSeconds();
        this.milliseconds = this.timeObj.getMilliseconds();
        interval(1).subscribe(count => {
            console.log(count);
            this.milliseconds--;
            if (this.milliseconds === 0) {
                if (this.seconds > 0) {
                    this.seconds--;
                    this.milliseconds = 59;
                }
            }
            if (this.seconds === 0) {
                if (this.minutes > 0) {
                    this.minutes--;
                    this.seconds = 59;
                }
            }
            this.toolService.parse(this.digits, this.minutes, 'col1')
            this.toolService.parse(this.digits, this.seconds, 'col2')
            this.toolService.parse(this.digits, this.milliseconds, 'col3')
        })
    }
}
