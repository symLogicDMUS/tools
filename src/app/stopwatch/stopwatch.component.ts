import { Component, OnInit } from '@angular/core';
import { getAllZeros } from '../analog-display/getAllZeros';
import {interval} from "rxjs";
import {ToolService} from "../tools.service";

@Component({
    selector: 'app-stopwatch',
    template: `
        <div class="content">
            <app-analog-display
                [digits]="digits"
                [tool]="'stopwatch'"
            ></app-analog-display>
            <app-action-buttons
                (playPause)="togglePlayPause($event)"
                (reset)="onReset()"
                [paused]="paused">
            </app-action-buttons>
        </div>
    `,
    styleUrls: ['stopwatch.component.scss'],
})
export class StopwatchComponent implements OnInit {
    digits: Digits = getAllZeros();
    minutes: number = 0;
    seconds: number = 0;
    milliseconds: number = 0;
    paused: boolean = true;

    constructor(private toolService: ToolService) {}

    togglePlayPause(paused: boolean) {
        this.paused = paused;
    }

    onReset() {
        this.minutes = 0;
        this.seconds = 0;
        this.milliseconds = 0;
        this.toolService.parse(this.digits, this.milliseconds, 'col3');
        this.toolService.parse(this.digits, this.seconds, 'col2');
        this.toolService.parse(this.digits, this.minutes, 'col1');
    }

    ngOnInit(): void {
        interval(1).subscribe(count => {
            if (! this.paused) {
                this.milliseconds++;
                this.toolService.parse(this.digits, this.milliseconds, 'col3');
            }
        })
        interval(1000).subscribe(count => {
            if (! this.paused) {
                this.seconds++;
                this.toolService.parse(this.digits, this.seconds, 'col2');
            }
        })
        interval(60000).subscribe(count => {
            if (! this.paused) {
                this.minutes++;
                this.toolService.parse(this.digits, this.minutes, 'col1');
            }
        })
    }
}
