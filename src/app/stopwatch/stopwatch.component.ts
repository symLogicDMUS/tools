import { Component, OnInit } from '@angular/core';
import {getAllZeros} from "../analog-display/getAllZeros";

@Component({
    selector: 'app-stopwatch',
    template: `
        <div class="container content">
            <app-analog-display [digits]="digits"></app-analog-display>
        </div>
    `,
    styleUrls: ['../app.component.scss'],
})
export class StopwatchComponent implements OnInit {

    digits: Digits = getAllZeros();

    constructor() {}

    ngOnInit(): void {}
}
