import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-action-buttons',
    template: `
        <div class="action-buttons">
            <button mat-icon-button style="margin: 1rem; color: white;" (click)="togglePlayPause()">
                <mat-icon *ngIf="paused">play_arrow</mat-icon>
                <mat-icon *ngIf="!paused">pause_icon</mat-icon>
            </button>
            <button mat-icon-button style="margin: 1rem; color: white;" (click)="onReset()">
                <mat-icon>undo</mat-icon>
            </button>
        </div>
    `,
    styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent implements OnInit {
    @Output() playPause = new EventEmitter<boolean>();
    @Output() reset = new EventEmitter<any>();
    @Input() paused: boolean;

    constructor() {
    }

    ngOnInit(): void {}

    togglePlayPause() {
        this.playPause.emit(! this.paused)
    }

    onReset() {
        this.reset.emit()
    }

}
