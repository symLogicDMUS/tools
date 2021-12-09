import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-digit',
    // templateUrl: './digit.component.html',
    template: `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="351.397"
            height="644.543"
            viewBox="0 0 351.397 644.543"
            style="width: 40px; margin: 0.25rem"
        >
            <g id="layer1" transform="translate(68.877 -126.439)">
                <g id="g2142">
                    <path
                        id="top"
                        d="M-2.5,174.786l230.43-.348,30.324-23.456L220.87,126.439l-230.43.754L-39.841,150.7Z"
                        [ngClass]="{
                            active: digits[digit].top,
                            inactive: !digits[digit].top
                        }"
                    />
                    <path
                        id="upper-left"
                        d="M-20.251,411.077-20.6,180.646l-23.456-30.323L-68.6,187.709l.753,230.43,23.509,30.282Z"
                        [ngClass]="{
                            active: digits[digit].upper_left,
                            inactive: !digits[digit].upper_left
                        }"
                    />
                    <path
                        id="upper-right"
                        d="M234.173,188.326l.348,230.431,23.456,30.323,24.542-37.387-.753-230.43-23.509-30.282Z"
                        [ngClass]="{
                            active: digits[digit].upper_right,
                            inactive: !digits[digit].upper_right
                        }"
                    />
                    <path
                        id="middle"
                        d="M-4.15,472.719l230.431-.348L256.6,448.915l-37.387-24.542-230.43.753-30.282,23.509Z"
                        [ngClass]="{
                            active: digits[digit].middle,
                            inactive: !digits[digit].middle
                        }"
                    />
                    <path
                        id="bottom-left"
                        d="M-20.531,709.175l-.348-230.431-23.456-30.323-24.542,37.387.753,230.43,23.509,30.282Z"
                        [ngClass]="{
                            active: digits[digit].bottom_left,
                            inactive: !digits[digit].bottom_left
                        }"
                    />
                    <path
                        id="bottom-right"
                        d="M233.893,486.424l.348,230.431L257.7,747.178l24.542-37.387-.753-230.43L257.977,449.08Z"
                        [ngClass]="{
                            active: digits[digit].bottom_right,
                            inactive: !digits[digit].bottom_right
                        }"
                    />
                    <path
                        id="bottom"
                        d="M-5.7,770.982l230.431-.348,30.323-23.456-37.387-24.542-230.43.753L-43.046,746.9Z"
                        [ngClass]="{
                            active: digits[digit].bottom,
                            inactive: !digits[digit].bottom
                        }"
                    />
                </g>
            </g>
        </svg>
    `,
    styleUrls: ['./digit.component.scss'],
})
export class DigitComponent implements OnInit {
    @Input() digit: number;

    /**digit matches index except 10th index is for null*/
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
        {
            top: false,
            upper_left: false,
            upper_right: false,
            middle: false,
            bottom_left: false,
            bottom_right: false,
            bottom: false,
        },
    ];

    ngOnInit() {
        console.log('D:', this.digit);
        console.log(this.digit);
    }
}
