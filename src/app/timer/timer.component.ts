import {Observable} from "rxjs";
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

    digits: Digits = getAllZeros();

    constructor(private toolService: ToolService) {}

    ngOnInit(): void {
        const timer = Observable.create(observer => {
            const times = this.timeObj.getTimes()
            let count = 0;
            setInterval(() => {
                times.milliseconds--;
                if (times.milliseconds === 0) {
                    times.seconds--;
                    times.milliseconds = 59;
                }
                if (times.seconds === 0) {
                    times.minutes--;
                    times.seconds = 59;
                    if (times.minutes === 0) {
                        times.milliseconds = 0;
                        times.seconds = 0;
                        times.minutes = 0;
                    }
                }
                this.toolService.parse(this.digits, times.minutes, "col1")
                this.toolService.parse(this.digits, times.seconds, "col2")
                this.toolService.parse(this.digits, times.milliseconds, "col3")
                count++;
                observer.next(count)
            }, 1)
            timer.subscribe(count => {
                console.log(count);
                // if (times.milliseconds === 0 && times.seconds === 0 && times.minutes === 0) {
                //     console.log(times)
                //     clearInterval(timer)
                // }
            })
        })
    }
}
