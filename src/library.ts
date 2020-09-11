// // Obiekt charakteryzujący książkę:

// // Ma miec: Tytuł, Autora, id(kod)

// // Obiekt charakteryzujący bibliotekę:
// // Ma miec: Listę książek(obiektów) z różnymi autorami, tytułami (około 8-15).
// // Ma umożliwiać: dodawanie książek do listy, usuwanie książek z listy

// // Obiekt charakteryzujący wypożyczenie:
// // Ma mieć: datę wypożyczenia, datę zwrotu( +7d od wypożyczenia), id wypożyczonej
// // pozycji, jej tytuł. kara
// // Ma umożliwiać: wypożyczenie ksiązki (jesli książki nie ma w liście - jest niedostepna/
// // wypożyczona ma zwracać informację) jesli jest dostępna usuwać książkę z listy
// // dostępnych, ma umożliwiać zwrot - jeśli odbędzie się terminowo kara jest 0 - jesli nie -
// // każdy dzień zwłoki to naliczenie jakiejś kary. Przy zwrocie książka wraca na liste.

// import {
//     v4 as uuidv4
// } from "uuid";
// // import moment from "moment";
// import { IBook, ILibrary, IRent } from "./interfaceLibrary";
// import { IBook } from "./interface/IBook";
// import { IRent } from "./interface/IRent";

// class Validator {
//     static isEmptyString(valueString: string): void {
//         if (valueString.length === 0) throw new Error(`is wrong value`);
//     }

//     static isBook(objBook: IBook): boolean {
//         return objBook instanceof Book;
//     }

//     static isBookInLibrary(objLibrary: object): boolean {
//         return objLibrary instanceof Library;
//     }
// }
// //tworzymy ksiazke

// class Book implements IBook {
//     id: string;
//     title: string;
//     author: string
//     constructor(title: string, author: string) {
//         Validator.isEmptyString(title);
//         Validator.isEmptyString(author);

//         this.id = uuidv4();
//         this.title = title;
//         this.author = author;
//     }
// }


// class Library implements ILibrary {
//     listBooks: Array<IBook>;
//     listRentBooks: Array<IRent>;

//     constructor() {
//         this.listBooks = [];
//         this.listRentBooks = [];
//     }

//     addBooks(...books: Array<IBook>): void {
//         books.forEach((book) => {
//             if (!Validator.isBook(book)) return false;
//         });
//         this.listBooks.push(...books);
//     }

//     deleteBook(objBook: IBook): void {
//         if (this.listBooks.some(book => book.id === objBook.id)) {
//             this.listBooks = this.listBooks.filter(el => el.id !== objBook.id)
//         }

//         // ALTERNATIVE:
//         //delete with use reduce
//         // this.listBooks = this.listBooks.reduce((acc, el) => {
//         //     if (!el.uuid === objBook.id) {
//         //         acc.push(el);
//         //     }
//         //     return acc;
//         // }, []);
//     }

//     searchAvailableBooks(phrase: string): Array<IBook> {
//         return this.listBooks.filter((book) => {
//             Validator.isEmptyString(phrase);
//             return (
//                 book.title.toLowerCase().includes(phrase.toLowerCase()) ||
//                 book.author.toLowerCase().includes(phrase.toLowerCase())
//             );
//         });
//     }

//     searchRentBooks(phrase: string): Array<IBook> {
//         return this.listRentBooks.filter((book) => {
//             Validator.isEmptyString(phrase);
//             return (
//                 book.title.toLowerCase().includes(phrase.toLowerCase()) ||
//                 book.author.toLowerCase().includes(phrase.toLowerCase())
//             );
//         });
//     }

//     rentABook(objBook: IBook): void {
//         if (!Validator.isBook(objBook)) throw new Error(`obj Books doesn't includes class Book`)
//         const isFindBookInListBook = this.listBooks.some(element => element.id === book.id);
//         const isFindBookInListRentBook = this.listRentBooks.some(element => element.id === book.id);
//         if (isFindBookInListBook) {
//             const rent: IRent = new Rent().initialize(objBook);
//             this.listRentBooks.push(rent)
//             this.listBooks = this.listBooks.filter(el => el.id !== objBook.id);
//         }
//     }

//     returnABook(objBook: IBook): void {
//         const isFindBookInListRentBook = this.listRentBooks.some(element => element.id === book.id);

//         // console.log(this.listBooks)
//         // console.log("list rent books", this.listRentBooks);
//         // this.listRentBooks = this.listRentBooks.filter(el => el.id !== objBook.id);
//         // console.log("list rent books po filt", this.listRentBooks);

//         // this.listBooks.push(objBook);
//         // console.log(this.listRentBooks)
//     }
// }


// class Rent implements IRent {
//     classBook!: IBook;
//     constructor() {
//         this.classBook;
//     }

//     initialize(objBook: IBook): IRent {
//         this.classBook = objBook;
//         return this;
//     }

//     calculate(): string {
//         return 'diff between dateRent a dateReturn'
//     }
// }

// // Obiekt charakteryzujący bibliotekę:
// // Ma miec: Listę książek(obiektów) z różnymi autorami, tytułami (około 8-15).
// // Ma umożliwiać: dodawanie książek do listy, usuwanie książek z listy

// // Obiekt charakteryzujący wypożyczenie:
// // Ma mieć: datę wypożyczenia, datę zwrotu( +7d od wypożyczenia), id wypożyczonej
// // pozycji, jej tytuł. kara
// // Ma umożliwiać: wypożyczenie ksiązki (jesli książki nie ma w liście - jest niedostepna/
// // wypożyczona ma zwracać informację) jesli jest dostępna usuwać książkę z listy
// // dostępnych, ma umożliwiać zwrot - jeśli odbędzie się terminowo kara jest 0 - jesli nie -
// // każdy dzień zwłoki to naliczenie jakiejś kary. Przy zwrocie książka wraca na liste.


// const book = new Book("harry potter", "j.k rowling");
// const book2 = new Book("pan samochodzik", "jacek dudek");
// const book3 = new Book("piotr i przygody", "piotr kowalski");
// const book4 = new Book("darek i przygody", "darek kowal");
// const book5 = new Book("jan", "jan janiasty");
// const book6 = new Book("karol", "karol karolasty");
// const book7 = new Book("wojciech", "wojtek wojciechowski");
// const book8 = new Book("konrad", "konrad konradowski");
// const book9 = new Book("tomasz", "tomasz tomaszewski");
// const book10 = new Book("adrian", "adrian adrianowski");
// const book11 = new Book('damian', "damian damianowski");

// const library = new Library();
// library.addBooks(
//     book,
//     book2,
//     book3,
//     book4,
//     book5,
//     book6,
//     book7,
//     book8,
//     book9,
//     book10,
//     book11,
// );
// library.rentABook(book5);
// library.returnABook(book5);