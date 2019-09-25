export class Person {
    firstName: string;
    lastName: string;
    bearhDay: Date;
    setBearthDay(year: number, month: number, day: number): void {
        this.bearhDay = new Date(year, month, day);
    }
    GetAge(): number {
        let date = new Date();
        return date.getFullYear() - this.bearhDay.getFullYear();
    }
}
