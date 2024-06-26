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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var controleEstoque_1 = require("./controller/controleEstoque");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var opcao, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!true) return [3 /*break*/, 23];
                    console.log('\nOpções:');
                    console.log('1. Adicionar item');
                    console.log('2. Remover item');
                    console.log('3. Listar itens');
                    console.log('4. Valor total');
                    console.log('5. Peso total');
                    console.log('6. Valor médio');
                    console.log('7. Peso médio');
                    console.log('8. Mostrar quantidade de itens');
                    console.log('9. Mostrar quantidade de produtos');
                    console.log('10. Sair');
                    _a = parseInt;
                    return [4 /*yield*/, prompt('Escolha uma opção: ')];
                case 1:
                    opcao = _a.apply(void 0, [_c.sent()]);
                    _b = opcao;
                    switch (_b) {
                        case 1: return [3 /*break*/, 2];
                        case 2: return [3 /*break*/, 4];
                        case 3: return [3 /*break*/, 6];
                        case 4: return [3 /*break*/, 8];
                        case 5: return [3 /*break*/, 10];
                        case 6: return [3 /*break*/, 12];
                        case 7: return [3 /*break*/, 14];
                        case 8: return [3 /*break*/, 16];
                        case 9: return [3 /*break*/, 18];
                        case 10: return [3 /*break*/, 20];
                    }
                    return [3 /*break*/, 21];
                case 2: return [4 /*yield*/, (0, controleEstoque_1.adicionar)()];
                case 3:
                    _c.sent();
                    return [3 /*break*/, 22];
                case 4: return [4 /*yield*/, (0, controleEstoque_1.remover)()];
                case 5:
                    _c.sent();
                    return [3 /*break*/, 22];
                case 6: return [4 /*yield*/, (0, controleEstoque_1.listar)()];
                case 7:
                    _c.sent();
                    return [3 /*break*/, 22];
                case 8: return [4 /*yield*/, (0, controleEstoque_1.valor_total)()];
                case 9:
                    _c.sent();
                    return [3 /*break*/, 22];
                case 10: return [4 /*yield*/, (0, controleEstoque_1.peso_total)()];
                case 11:
                    _c.sent();
                    return [3 /*break*/, 22];
                case 12: return [4 /*yield*/, (0, controleEstoque_1.valor_medio)()];
                case 13:
                    _c.sent();
                    return [3 /*break*/, 22];
                case 14: return [4 /*yield*/, (0, controleEstoque_1.peso_medio)()];
                case 15:
                    _c.sent();
                    return [3 /*break*/, 22];
                case 16: return [4 /*yield*/, (0, controleEstoque_1.n_itens)()];
                case 17:
                    _c.sent();
                    return [3 /*break*/, 22];
                case 18: return [4 /*yield*/, (0, controleEstoque_1.n_produtos)()];
                case 19:
                    _c.sent();
                    return [3 /*break*/, 22];
                case 20:
                    console.log('Saindo...');
                    process.exit(0);
                    _c.label = 21;
                case 21:
                    console.log('Opção inválida. Tente novamente.');
                    _c.label = 22;
                case 22: return [3 /*break*/, 0];
                case 23: return [2 /*return*/];
            }
        });
    });
}
function prompt(message) {
    return __awaiter(this, void 0, void 0, function () {
        var readline;
        return __generator(this, function (_a) {
            readline = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            });
            return [2 /*return*/, new Promise(function (resolve) {
                    readline.question(message, function (input) {
                        readline.close();
                        resolve(input);
                    });
                })];
        });
    });
}
main();
