"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexcontroller = void 0;
class IndexController {
    index(req, res) {
        res.send('elo');
    }
}
exports.indexcontroller = new IndexController();
