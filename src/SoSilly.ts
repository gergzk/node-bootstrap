import { Silly } from './silly';

export default function soSilly(name: string, title: string) {
    return title + new Silly(name).read();
}