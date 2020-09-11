import { withUuid } from './withUuid'
export interface IBook extends withUuid {
    title: string;
    author: string;
}