import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { getAllZeros } from '../analog-display/getAllZeros';
import { ToolService } from '../tools.service';

@Component({
    selector: 'app-edit-timer-dialog',
    template: `
        <h2 mat-dialog-title>Edit Timer</h2>
        <mat-dialog-content>
            <div class="col-xs">
                <app-increase-button
                    [col]="'col1'"
                    (increase)="onIncrease($event)"
                ></app-increase-button>
                <app-increase-button
                    [col]="'col2'"
                    (increase)="onIncrease($event)"
                ></app-increase-button>
                <app-increase-button
                    [col]="'col3'"
                    (increase)="onIncrease($event)"
                ></app-increase-button>
            </div>
            <div class="row">
                <app-analog-display
                    [digits]="digits"
                    [tool]="'dialog'"
                ></app-analog-display>
            </div>
            <div class="col-xs">
                <app-decrease-button
                    [col]="'col1'"
                    (decrease)="onDecrease($event)"
                ></app-decrease-button>
                <app-decrease-button
                    [col]="'col2'"
                    (decrease)="onDecrease($event)"
                ></app-decrease-button>
                <app-decrease-button
                    [col]="'col3'"
                    (decrease)="onDecrease($event)"
                ></app-decrease-button>
            </div>
        </mat-dialog-content>
        <mat-dialog-actions>
            <button
                mat-raised-button
                color="primary"
                mat-dialog-close
                [mat-dialog-close]="{
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds
                }"
            >
                Save
            </button>
            <button mat-button mat-dialog-close>Cancel</button>
        </mat-dialog-actions>
    `,
    styleUrls: ['./edit-timer-dialog.component.scss'],
})
export class EditTimerDialogComponent implements OnInit {
    hours: number = 0;
    minutes: number = 0;
    seconds: number = 0;

    digits: Digits = getAllZeros();

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private toolService: ToolService
    ) {}

    ngOnInit(): void {
        this.hours = this.data.hours;
        this.minutes = this.data.minutes;
        this.seconds = this.data.seconds;
        this.toolService.parse(this.digits, this.hours, 'col1');
        this.toolService.parse(this.digits, this.minutes, 'col2');
        this.toolService.parse(this.digits, this.seconds, 'col3');
    }

    onIncrease(col: string) {
        switch (col) {
            case 'col1':
                if (this.hours === 99) {
                    this.hours = 0;
                } else {
                    this.hours += 1;
                }
                this.toolService.parse(this.digits, this.hours, col);
                break;
            case 'col2':
                if (this.minutes === 59) {
                    this.minutes = 0;
                } else {
                    this.minutes += 1;
                }
                this.toolService.parse(this.digits, this.minutes, col);
                break;
            case 'col3':
                if (this.seconds === 59) {
                    this.seconds = 0;
                } else {
                    this.seconds += 1;
                }
                this.toolService.parse(this.digits, this.seconds, col);
                break;
        }
    }

    onDecrease(col: string) {
        switch (col) {
            case 'col1':
                if (this.hours === 0) {
                    this.hours = 99;
                } else {
                    this.hours -= 1;
                }
                this.toolService.parse(this.digits, this.hours, col);
                break;
            case 'col2':
                if (this.minutes === 0) {
                    this.minutes = 59;
                } else {
                    this.minutes -= 1;
                }
                this.toolService.parse(this.digits, this.minutes, col);
                break;
            case 'col3':
                if (this.seconds === 0) {
                    this.seconds = 59;
                } else {
                    this.seconds -= 1;
                }
                this.toolService.parse(this.digits, this.seconds, col);
                break;
        }
    }
}
