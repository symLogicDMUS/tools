import { Component } from '@angular/core';
import {Times} from "../analog-display/Times";


@Component({
    selector: 'app-timer-list',
    template: `
        <div class="container content" *ngFor="let timer of timers;">
            <app-timer
                [timeObj]="timer"
                (edit)="onEdit($event)"
                (delete)="onDelete($event)"
            >
            </app-timer>
        </div>
        <dialog-data-example-dialog></dialog-data-example-dialog>
    `,
    styleUrls: ['timer-list.component.scss']
})
export class TimerListComponent {
    timers: Times [] = [
        new Times(0, 0, 2, 30, 0)
    ]

    dialog: boolean;

    onAdd() {

    }

    onEdit(index: number) {
        console.log(index)
        this.dialog = true;
    }

    onDelete(index: number) {
        console.log(index)
        this.dialog = true;
    }

    constructor() { }
}
