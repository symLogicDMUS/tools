import { Component } from '@angular/core';
import { Times } from '../analog-display/Times';
import { MatDialog } from '@angular/material/dialog';
import { EditTimerDialogComponent } from '../edit-timer-dialog/edit-timer-dialog.component';
import {ToolService} from "../tools.service";

@Component({
    selector: 'app-timer-list',
    template: `
        <div class="container content" *ngFor="let timer of timers">
            <app-timer
                [timeObj]="timer"
                (edit)="onEdit($event)"
                (delete)="onDelete($event)"
            >
            </app-timer>
        </div>
    `,
    styleUrls: ['timer-list.component.scss'],
})
export class TimerListComponent {
    timers: Times[] = [new Times(0, 0, 2, 30, 0)];

    constructor(private dialog: MatDialog, private toolService: ToolService) {}

    onAdd() {
        this.toolService.toolType.emit("Dialog")
        let dialogRef = this.dialog.open(EditTimerDialogComponent);
        dialogRef.afterClosed().subscribe((result) => {
            this.toolService.toolType.emit("Timer")
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
            }
        });
    }

    onEdit(index: number) {
        this.toolService.toolType.emit("Dialog")
        let dialogRef = this.dialog.open(EditTimerDialogComponent);
        dialogRef.afterClosed().subscribe((result) => {
            this.toolService.toolType.emit("Timer")
            if (!!result) {
                this.timers[index].setHours(result.hours);
                this.timers[index].setMinutes(result.minutes);
                this.timers[index].setSeconds(result.seconds);
            }
        });
    }

    onDelete(index: number) {
        this.timers = this.timers.splice(index, 1);
        for (let i = 0; i < this.timers.length; i++) {
            this.timers[i].setIndex(i);
        }
    }
}
