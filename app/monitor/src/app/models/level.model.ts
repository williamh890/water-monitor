export class WaterLevel {
    constructor(
        public level: number,
        public date: Date
    ) {}

    public toPoint() {
        return {
            y: this.level,
            x: this.date
        };
    }
}
