import { Book } from './components/Book'
import { Library } from './components/Library'
import { Rent } from './components/Rent'

const book = new Book("harry potter", "j.k rowling");
const book2 = new Book("pan samochodzik", "jacek dudek");
const book3 = new Book("piotr i przygody", "piotr kowalski");
const book4 = new Book("darek i przygody", "darek kowal");
const book5 = new Book("jan", "jan janiasty");
const book6 = new Book("karol", "karol karolasty");
const book7 = new Book("wojciech", "wojtek wojciechowski");
const book8 = new Book("konrad", "konrad konradowski");
const book9 = new Book("tomasz", "tomasz tomaszewski");
const book10 = new Book("adrian", "adrian adrianowski");
const book11 = new Book('damian', "damian damianowski");

const library = new Library();
library.addBooks(
    book,
    book2,
    book3,
    book4,
    book5,
    book6,
    book7,
    book8,
    book9,
    book10,
    book11,
);
library.rentABook(book5)
library.rentABook(book7)
// library.returnABook(book5);
// library.returnABook(book7);
console.log(library);