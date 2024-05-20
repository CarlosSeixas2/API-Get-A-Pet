"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sync = void 0;
const conn_1 = require("./src/db/conn");
// import user from './src/models/user'
function sync() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield conn_1.sequelize.authenticate();
            console.log('Conexão com o banco de dados estabelecida com sucesso.');
            // await user.sync()
            yield conn_1.sequelize.sync({ alter: true });
            console.log('Modelos sincronizados com o banco de dados.');
        }
        catch (error) {
            console.error('Erro ao conectar-se ao banco de dados:', error);
        }
    });
}
exports.sync = sync;
