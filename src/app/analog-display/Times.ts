export class Times {
    constructor(
        private index: number,
        private minutes: number,
        private seconds: number,
        private milliseconds: number
    ) {
    }
    getTimes() {
        return {
            minutes: this.minutes,
            seconds: this.seconds,
            milliseconds: this.milliseconds,
        }
    }
    getMilliseconds() {
        return this.milliseconds
    }
    getSeconds() {
        return this.seconds;
    }
    getMinutes() {
        return this.minutes;
    }
}
