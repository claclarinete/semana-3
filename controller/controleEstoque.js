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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.n_produtos = exports.n_itens = exports.peso_medio = exports.valor_medio = exports.peso_total = exports.valor_total = exports.listar = exports.remover = exports.adicionar = void 0;
var estoqueService_1 = __importDefault(require("../service/estoqueService"));
function adicionar() {
    return __awaiter(this, void 0, void 0, function () {
        var nome, pesoInput, valorInput, quantidadeInput, peso, valor, quantidade;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, estoqueService_1.default.prompt('Nome: ')];
                case 1:
                    nome = _a.sent();
                    return [4 /*yield*/, estoqueService_1.default.prompt('Peso (em kg): ')];
                case 2:
                    pesoInput = _a.sent();
                    return [4 /*yield*/, estoqueService_1.default.prompt('Valor: ')];
                case 3:
                    valorInput = _a.sent();
                    return [4 /*yield*/, estoqueService_1.default.prompt('Quantidade: ')];
                case 4:
                    quantidadeInput = _a.sent();
                    // Verificações para garantir que as entradas sejam válidas
                    if (!nome || isNaN(parseFloat(pesoInput)) || isNaN(parseFloat(valorInput)) || isNaN(parseInt(quantidadeInput))) {
                        console.log('Entradas inválidas. Certifique-se de fornecer valores válidos para peso, valor e quantidade.');
                        return [2 /*return*/];
                    }
                    peso = parseFloat(pesoInput);
                    valor = parseFloat(valorInput);
                    quantidade = parseInt(quantidadeInput);
                    estoqueService_1.default.adicionar(nome, peso, valor, quantidade);
                    return [2 /*return*/];
            }
        });
    });
}
exports.adicionar = adicionar;
function remover() {
    return __awaiter(this, void 0, void 0, function () {
        var nome;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, estoqueService_1.default.prompt('Item a ser removido: ')];
                case 1:
                    nome = _a.sent();
                    estoqueService_1.default.remover(nome);
                    return [2 /*return*/];
            }
        });
    });
}
exports.remover = remover;
function listar() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            estoqueService_1.default.listar();
            return [2 /*return*/];
        });
    });
}
exports.listar = listar;
function valor_total() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            estoqueService_1.default.valor_total();
            return [2 /*return*/];
        });
    });
}
exports.valor_total = valor_total;
function peso_total() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            estoqueService_1.default.peso_total();
            return [2 /*return*/];
        });
    });
}
exports.peso_total = peso_total;
function valor_medio() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            estoqueService_1.default.valor_medio();
            return [2 /*return*/];
        });
    });
}
exports.valor_medio = valor_medio;
function peso_medio() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            estoqueService_1.default.peso_medio();
            return [2 /*return*/];
        });
    });
}
exports.peso_medio = peso_medio;
function n_itens() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            estoqueService_1.default.n_itens();
            return [2 /*return*/];
        });
    });
}
exports.n_itens = n_itens;
function n_produtos() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            estoqueService_1.default.n_produtos();
            return [2 /*return*/];
        });
    });
}
exports.n_produtos = n_produtos;
