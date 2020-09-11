import { IBook } from './IBook';
import { IRent } from './IRent';

export interface ILibrary {
    listBooks: Array<IBook>;
    listRentBooks: Array<object>;
    addBooks(...arrayOfBooks: Array<IBook>): void;
    deleteBook(book: IBook): void;
    searchAvailableBooks(phrase: string): Array<object>;
    searchRentBooks(phrase: string): any;
    rentABook(book: IBook): void;
    returnABook(book: IBook): void;
}