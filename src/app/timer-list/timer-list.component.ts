import { Component } from '@angular/core';
import {Times} from "../analog-display/Times";


@Component({
    selector: 'app-timer-list',
    template: `
        <div class="container content" *ngFor="let timer of timers;">
            <app-timer [timeObj]="timer"></app-timer>
        </div>
    `,
    styleUrls: ['./timer-list.component.scss']
})
export class TimerListComponent {
    timers: Times [] = [
        new Times(0, 2, 30, 59)
    ]

    constructor() { }
}
