import {
    v4 as uuidv4
} from "uuid";
import moment, { Moment } from "moment";
import { IRent } from '../interface/IRent'
import { IBook } from '../interface/IBook'

export class Rent implements IRent {
    id: string;
    dateRentABook: Moment;
    dateReturnABook: Moment;
    classBook!: IBook;
    penalty: number;
    constructor() {
        this.id = uuidv4();
        this.dateRentABook = moment();
        this.dateReturnABook = moment().subtract(7, 'days');
        this.classBook;
        this.penalty = 0;
    }

    initialize(objBook: IBook): IRent {
        this.classBook = objBook;
        return this;
    }

    calculate(): string {
        const differenceTime: any = moment.duration(this.dateRentABook.diff(this.dateReturnABook));
        const time = differenceTime / (1000 * 3600 * 24);
        if (time > 7 && time < 14) {
            return `${this.penalty + 1 * time} PLN`;
        } else if (time > 14) {
            return `${this.penalty + 1 * (time * 2)} PLN`;
        } else {
            return `${this.penalty} PLN`
        }
    }
}