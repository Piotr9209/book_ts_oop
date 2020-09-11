import { ILibrary } from '../interface/ILibrary'
import { IBook } from '../interface/IBook';
import { IRent } from '../interface/IRent';
import { Rent } from './Rent'


export class Library implements ILibrary {
    listBooks: Array<IBook>;
    listRentBooks: Array<IRent>;

    constructor() {
        this.listBooks = [];
        this.listRentBooks = [];
    }

    addBooks(...arrayOfBooks: Array<IBook>): void {
        arrayOfBooks.forEach((book) => {
            const doesNotExistInListBooks = !this.listBooks.find(findBook => findBook.id === book.id)
            if (doesNotExistInListBooks) {
                this.listBooks.push(book);
            }
        });
    }

    deleteBook(book: IBook): void {
        if (this.listBooks.some(book => book.id === book.id)) {
            this.listBooks = this.listBooks.filter(el => el.id !== book.id)
        }

        // ALTERNATIVE:
        //delete with use reduce
        // this.listBooks = this.listBooks.reduce((acc, el) => {
        //     if (!el.uuid === objBook.id) {
        //         acc.push(el);
        //     }
        //     return acc;
        // }, []);
    }

    searchAvailableBooks(phrase: string): Array<IBook> {
        if (phrase.length < 3) throw new Error('phrase must be the string and different from 0');
        return this.listBooks.filter((book) => {
            return Object.values(book).join('').toLowerCase().match(new RegExp(phrase, "g"));
        });
    }

    searchRentBooks(phrase: string): Array<IRent> {
        if (phrase.length < 3) throw new Error('phrase must be the string and different from 0');
        return this.listRentBooks.filter((book) => {
            return Object.values(book).join('').toLowerCase().match(new RegExp(phrase, "g"));
        });
    }

    rentABook(book: IBook): void {
        const rent: IRent = new Rent().initialize(book);
        this.listRentBooks.push(rent)
        this.listBooks = this.listBooks.filter(el => el.id !== book.id);
    }

    returnABook(book: IBook): void {
        const isBookInListRentBook = this.listRentBooks.some(someBook => someBook.classBook.id === book.id)
        if (isBookInListRentBook) {
            this.listBooks.push(book);
            this.listRentBooks = this.listRentBooks.filter(el => el.classBook.id !== book.id);
            new Rent().calculate();
        }
    }
}











