export class Times {
    constructor(
        private index: number,
        private hours: number,
        private minutes: number,
        private seconds: number,
        private milliseconds: number
    ) {
    }

    getTimes() {
        return {
            hours: this.hours,
            minutes: this.minutes,
            seconds: this.seconds,
            milliseconds: this.milliseconds,
        }
    }
    getIndex() {
        return this.index;
    }
    getHours() {
        return this.hours;
    }
    getMinutes() {
        return this.minutes;
    }
    getSeconds() {
        return this.seconds;
    }
    getMilliseconds() {
        return this.milliseconds
    }

    setIndex(index: number) {
        this.index = index;
    }
    setHours(hours: number) {
        this.hours = hours;
    }
    setMinutes(minutes: number) {
        this.minutes = minutes;
    }
    setSeconds(seconds: number) {
        this.seconds = seconds;
    }
    setMilliseconds(milliseconds: number) {
        this.milliseconds = milliseconds;
    }
}
