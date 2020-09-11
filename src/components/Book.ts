import { v4 as uuidv4 } from 'uuid';
import { IBook } from '../interface/IBook';
import { Validator } from './Validator';

export class Book implements IBook {
    id: string;
    title: string;
    author: string
    constructor(title: string, author: string) {
        Validator.isEmptyString(title);
        Validator.isEmptyString(author);

        this.id = uuidv4();
        this.title = title;
        this.author = author;
    }
}