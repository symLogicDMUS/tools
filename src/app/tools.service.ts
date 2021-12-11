import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ToolService {
    @Output() toolType = new EventEmitter<string>();
    @Output() timerUpdate = new EventEmitter<number>();

    constructor() {}

    parse(digits: Digits, time: number, col: string) {
        if (time > 9) {
            digits[col].tens = Number(String(time)[0]);
            digits[col].ones = Number(String(time)[1]);
        } else {
            digits[col].tens = 0;
            digits[col].ones = time;
        }
    }
}
