import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ToolService {
    toolType: EventEmitter<string> = new EventEmitter<string>();

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
