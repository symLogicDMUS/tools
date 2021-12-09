import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <mat-tab-group  style="height: 100vh;">
            <mat-tab label="Clock"><app-clock></app-clock></mat-tab>
            <mat-tab label="Second"> Content 2 </mat-tab>
            <mat-tab label="Third"> Content 3 </mat-tab>
        </mat-tab-group>
    `,
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    index: number = 9;
    title = 'tools';
}
