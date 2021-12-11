import { Component } from '@angular/core';
import { Times } from '../analog-display/Times';
import { MatDialog } from '@angular/material/dialog';
import { EditTimerDialogComponent } from '../edit-timer-dialog/edit-timer-dialog.component';
import { ToolService } from '../tools.service';

@Component({
    selector: 'app-timer-list',
    template: `
        <div class="content">
            <app-timer
                *ngFor="let timer of timers"
                [timeObj]="timer"
                (edit)="onEdit($event)"
                (delete)="onDelete($event)"
            >
            </app-timer>
        </div>
        <button mat-fab color="primary" class="add-timer" (click)="onAdd()">
            <mat-icon>add</mat-icon>
        </button>
    `,
    styleUrls: ['timer-list.component.scss'],
})
export class TimerListComponent {
    timers: Times[] = [new Times(0, 0, 2, 30, 0)];

    constructor(private dialog: MatDialog, private toolService: ToolService) {}

    onAdd() {
        this.toolService.toolType.emit('Dialog');
        let dialogRef = this.dialog.open(EditTimerDialogComponent, {
            data: { hours: 0, minutes: 0, seconds: 0 },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (!!result) {
                this.timers.push(
                    new Times(
                        this.timers.length,
                        result.hours,
                        result.minutes,
                        result.seconds,
                        0
                    )
                );
                this.toolService.timerUpdate.emit(this.timers.length - 1);
            }
            this.toolService.toolType.emit('Timer');
        });
    }

    onEdit(index: number) {
        this.toolService.toolType.emit('Dialog');
        let dialogRef = this.dialog.open(EditTimerDialogComponent, {
            data: {
                hours: this.timers[index].getHours(),
                minutes: this.timers[index].getMinutes(),
                seconds: this.timers[index].getSeconds(),
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (!!result) {
                this.timers[index].setHours(result.hours);
                this.timers[index].setMinutes(result.minutes);
                this.timers[index].setSeconds(result.seconds);
                this.toolService.timerUpdate.emit(index);
            }
            this.toolService.toolType.emit('Timer');
        });
    }

    onDelete(index: number) {
        this.timers.splice(index, 1);
        for (let i = 0; i < this.timers.length; i++) {
            this.timers[i].setIndex(i);
        }
    }
}
