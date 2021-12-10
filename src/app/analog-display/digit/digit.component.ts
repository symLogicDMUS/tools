import { Component, Input, OnInit } from '@angular/core';
import {ToolService} from "../../tools.service";

@Component({
    selector: 'app-digit',
    templateUrl: './digit.component.html',
    styleUrls: ['./digit.component.scss'],
})
export class DigitComponent implements OnInit {
    @Input() digit: number;

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

    clock: boolean = true;
    stopwatch: boolean = false;
    timer: boolean = false;

    constructor(private toolService: ToolService) {
    }

    ngOnInit() {
        this.toolService.toolType.subscribe(toolType => {
            switch (toolType) {
                case "Clock":
                    this.clock = true;
                    this.stopwatch = false;
                    this.timer = false;
                    break;
                case "Stopwatch":
                    this.clock = false;
                    this.stopwatch = true;
                    this.timer = false;
                    break;
                case "Timer":
                    this.clock = false;
                    this.stopwatch = false;
                    this.timer = true;
                    break;
            }
        })
    }
}
