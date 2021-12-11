import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-digit',
    templateUrl: './digit.component.html',
    styleUrls: ['./digit.component.scss'],
})
export class DigitComponent {
    @Input() digit: number;
    @Input() tool: string;

    digits = [
        {
            top: true,
            upper_left: true,
            upper_right: true,
            middle: false,
            bottom_left: true,
            bottom_right: true,
            bottom: true,
        },
        {
            top: false,
            upper_left: false,
            upper_right: true,
            middle: false,
            bottom_left: false,
            bottom_right: true,
            bottom: false,
        },
        {
            top: true,
            upper_left: false,
            upper_right: true,
            middle: true,
            bottom_left: true,
            bottom_right: false,
            bottom: true,
        },
        {
            top: true,
            upper_left: false,
            upper_right: true,
            middle: true,
            bottom_left: false,
            bottom_right: true,
            bottom: true,
        },
        {
            top: false,
            upper_left: true,
            upper_right: true,
            middle: true,
            bottom_left: false,
            bottom_right: true,
            bottom: false,
        },
        {
            top: true,
            upper_left: true,
            upper_right: false,
            middle: true,
            bottom_left: false,
            bottom_right: true,
            bottom: true,
        },
        {
            top: true,
            upper_left: true,
            upper_right: false,
            middle: true,
            bottom_left: true,
            bottom_right: true,
            bottom: true,
        },
        {
            top: true,
            upper_left: false,
            upper_right: true,
            middle: false,
            bottom_left: false,
            bottom_right: true,
            bottom: false,
        },
        {
            top: true,
            upper_left: true,
            upper_right: true,
            middle: true,
            bottom_left: true,
            bottom_right: true,
            bottom: true,
        },
        {
            top: true,
            upper_left: true,
            upper_right: true,
            middle: true,
            bottom_left: false,
            bottom_right: true,
            bottom: true,
        },
    ];

    constructor() {}
}
