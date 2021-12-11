import { Component } from '@angular/core';
import { ToolService } from './tools.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-root',
    template: `
        <mat-tab-group
            style="height: 100vh;"
            (selectedTabChange)="setTool($event)"
        >
            <mat-tab label="Clock"> <app-clock></app-clock> </mat-tab>
            <mat-tab label="Timer"> <app-timer-list></app-timer-list> </mat-tab>
            <mat-tab label="Stopwatch">
                <app-stopwatch></app-stopwatch>
            </mat-tab>
        </mat-tab-group>
    `,
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'tools';

    constructor(private toolService: ToolService, private dialog: MatDialog) {}

    setTool(event) {
        this.toolService.toolType.emit(event.tab.textLabel);
    }
}
