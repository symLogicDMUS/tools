import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-clock',
    template: `
        <app-analog-display [digits]="digits"></app-analog-display>
    `,
    styles: [``],
})
export class ClockComponent implements OnInit {
    /**
     * 10th index for unused digit.
     * (number is index of array in child where index = value except when digit not used)
     * */
    digits = {
        hours: {
            tens: 10,
            ones: 10,
        },
        minutes: {
            tens: 10,
            ones: 10,
        },
        seconds: {
            tens: 10,
            ones: 10,
        },
    };

    parse(time, units) {
        if (time > 9) {
            this.digits[units].tens = Number(String(time)[0]);
            this.digits[units].ones = Number(String(time)[1]);
        } else {
            this.digits[units].tens = 10;
            this.digits[units].ones = time;
        }
    }

    constructor() {}

    ngOnInit() {
        const tick = Observable.create((observer) => {
            setInterval(() => {
                observer.next(new Date());
            }, 1000);
        });
        tick.subscribe((date) => {
            this.parse(date.getHours(), 'hours');
            this.parse(date.getMinutes(), 'minutes');
            this.parse(date.getSeconds(), 'seconds');
        });
    }
}
