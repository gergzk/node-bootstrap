
export default function foo(n: number): number {
    return n*n+n;
}
export class Silly {
    private _arg: string;
    public constructor(arg: string) {
        this._arg = arg;
    }

    read = function(): string {
        return "Silly " + this._arg;
    }
}


