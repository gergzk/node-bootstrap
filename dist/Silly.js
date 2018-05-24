"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function foo(n) {
    return n * n + n;
}
exports.default = foo;
var Silly = /** @class */ (function () {
    function Silly(arg) {
        this.read = function () {
            return "Silly " + this._arg;
        };
        this._arg = arg;
    }
    return Silly;
}());
exports.Silly = Silly;
//# sourceMappingURL=Silly.js.map