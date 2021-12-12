import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <mat-tab-group>
            <mat-tab label="Clock">
                <app-clock></app-clock>
            </mat-tab>
            <mat-tab label="Timer">
                <app-timer-list></app-timer-list>
            </mat-tab>
            <mat-tab label="Stopwatch">
                <app-stopwatch></app-stopwatch>
            </mat-tab>
        </mat-tab-group>
    `,
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'tools';
    constructor() {}
}
