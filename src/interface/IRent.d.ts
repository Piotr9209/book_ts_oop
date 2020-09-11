import { withUuid } from "./withUuid";
import { IBook } from "./IBook";
import { Moment } from "moment";

export interface IRent extends withUuid {
    dateRentABook: Moment;
    dateReturnABook: Moment;
    classBook: IBook;
    penalty: number;
    initialize(objBook: object): IRent;
    calculate(): string;
}