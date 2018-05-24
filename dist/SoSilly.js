"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var silly_1 = require("./silly");
function soSilly(name, title) {
    return title + new silly_1.Silly(name).read();
}
exports.default = soSilly;
//# sourceMappingURL=SoSilly.js.map