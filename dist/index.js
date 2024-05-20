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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const main_routes_1 = __importDefault(require("./src/routes/main.routes"));
const sync_1 = require("./sync");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 5000 || process.env.PORT;
app.use((0, cors_1.default)({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
app.use('/user', main_routes_1.default);
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, sync_1.sync)();
            app.listen(PORT, () => {
                console.log(`Servidor está ouvindo na porta ${PORT}`);
            });
        }
        catch (error) {
            console.error('Erro ao iniciar o servidor:', error);
        }
    });
}
startServer();
