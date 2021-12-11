import { interval } from 'rxjs';
import { ToolService } from '../tools.service';
import { Times } from '../analog-display/Times';
import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
} from '@angular/core';
import { getAllZeros } from '../analog-display/getAllZeros';

@Component({
    selector: 'app-timer',
    template: `
        <mat-card class="timer">
            <mat-card-title></mat-card-title>
            <mat-card-content class="display">
                <app-analog-display
                    [digits]="digits"
                    [tool]="'timer'"
                ></app-analog-display>
            </mat-card-content>
            <div class="card-actions">
                <button mat-icon-button (click)="togglePlayPause()">
                    <mat-icon *ngIf="paused">play_arrow</mat-icon>
                    <mat-icon *ngIf="!paused">pause_icon</mat-icon>
                </button>
                <button mat-icon-button (click)="onReset()">
                    <mat-icon>undo</mat-icon>
                </button>
                <button mat-icon-button (click)="onEdit()" [disabled]="!paused">
                    <mat-icon>edit</mat-icon>
                </button>
                <button
                    mat-icon-button
                    (click)="onDelete()"
                    [disabled]="!paused"
                >
                    <mat-icon>delete</mat-icon>
                </button>
            </div>
        </mat-card>
    `,
    styleUrls: ['timer.component.scss'],
})
export class TimerComponent implements OnInit {
    @Input() timeObj: Times;
    @Output() edit: EventEmitter<number> = new EventEmitter<number>();
    @Output() delete: EventEmitter<number> = new EventEmitter<number>();
    hours: number;
    minutes: number;
    seconds: number;
    paused: boolean = true;
    digits: Digits = getAllZeros();

    constructor(private toolService: ToolService) {}

    togglePlayPause() {
        this.paused = !this.paused;
    }

    onEdit() {
        this.edit.emit(this.timeObj.getIndex());
    }

    onDelete() {
        this.delete.emit(this.timeObj.getIndex());
    }

    onReset() {
        this.hours = this.timeObj.getHours();
        this.minutes = this.timeObj.getMinutes();
        this.seconds = this.timeObj.getSeconds();
        this.toolService.parse(this.digits, this.hours, 'col1');
        this.toolService.parse(this.digits, this.minutes, 'col2');
        this.toolService.parse(this.digits, this.seconds, 'col3');
    }

    tick() {
        this.seconds--;
        if (this.seconds === 0) {
            if (this.minutes > 0) {
                this.minutes--;
                this.seconds = 59;
            }
        }
        if (this.minutes === 0) {
            if (this.hours > 0) {
                this.hours--;
                this.minutes = 59;
            }
        }
    }

    ngOnInit(): void {
        this.onReset()
        const timer = interval(1000).subscribe((count) => {
            if (!this.paused) {
                this.tick();
                if (
                    this.minutes === 0 &&
                    this.hours === 0 &&
                    this.seconds === 0
                ) {
                    timer.unsubscribe();
                }
                this.toolService.parse(this.digits, this.hours, 'col1');
                this.toolService.parse(this.digits, this.minutes, 'col2');
                this.toolService.parse(this.digits, this.seconds, 'col3');
            }
        });
        this.toolService.timerUpdate.subscribe((index) => {
            if (this.timeObj.getIndex() === index) {
                this.onReset();
                this.toolService.timerUpdate.emit(-1);
            }
        });
    }
}
