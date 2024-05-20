"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Userrouter = express_1.default.Router();
Userrouter.get('/register', (res) => {
    res.json({ message: 'Register route' });
});
exports.default = Userrouter;
