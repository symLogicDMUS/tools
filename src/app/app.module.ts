import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { TimerComponent } from './timer/timer.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { AnalogDisplayComponent } from './analog-display/analog-display.component';
import { DigitComponent } from './analog-display/digit/digit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from './navbar/navbar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { TimerListComponent } from './timer-list/timer-list.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ResponsiveDrawerComponent } from './responsive-drawer/responsive-drawer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditTimerDialogComponent } from './edit-timer-dialog/edit-timer-dialog.component';
import {DecreaseButtonComponent} from "./edit-timer-dialog/decrease-button/decrease-button.component";
import { IncreaseButtonComponent } from './edit-timer-dialog/increase-button/increase-button.component';

@NgModule({
    declarations: [
        AppComponent,
        ClockComponent,
        TimerComponent,
        StopwatchComponent,
        AnalogDisplayComponent,
        DigitComponent,
        ResponsiveDrawerComponent,
        NavbarComponent,
        TimerListComponent,
        EditTimerDialogComponent,
        DecreaseButtonComponent,
        IncreaseButtonComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        BrowserAnimationsModule,
        MatButtonToggleModule,
        MatDialogModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
