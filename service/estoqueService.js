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
var readCSV_1 = require("../model/readCSV");
var ServiceEstoque = /** @class */ (function () {
    function ServiceEstoque() {
        this.estoque = [];
        this.filename = 'estoque.csv';
        this.carregarEstoque();
    }
    ServiceEstoque.prototype.carregarEstoque = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 6]);
                        return [4 /*yield*/, (0, readCSV_1.readCSV)(this.filename)];
                    case 1:
                        data = _a.sent();
                        this.estoque = data.map(function (row) { return ({
                            nome: row[0],
                            peso: parseFloat(row[1]),
                            valor: parseFloat(row[2]),
                            quantidade: parseInt(row[3])
                        }); });
                        return [3 /*break*/, 6];
                    case 2:
                        error_1 = _a.sent();
                        if (!(error_1 === 'ENOENT')) return [3 /*break*/, 4];
                        console.log('Arquivo não encontrado. Criando um novo...');
                        return [4 /*yield*/, (0, readCSV_1.writeCSV)(this.filename, [])];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4: throw error_1;
                    case 5: return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ServiceEstoque.prototype.salvarEstoque = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = this.estoque.map(function (item) { return [
                            item.nome,
                            item.peso.toString(),
                            item.valor.toString(),
                            item.quantidade.toString()
                        ]; });
                        return [4 /*yield*/, (0, readCSV_1.writeCSV)(this.filename, data)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ServiceEstoque.prototype.prompt = function (message) {
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
    };
    ServiceEstoque.prototype.adicionar = function (nome, peso, valor, quantidade) {
        var itemIndex = this.estoque.findIndex(function (item) { return item.nome === nome; });
        if (itemIndex !== -1) {
            console.log('Item já existe no estoque. Aumentando a quantidade...');
            this.estoque[itemIndex].quantidade += quantidade;
        }
        else {
            this.estoque.push({ nome: nome, peso: peso, valor: valor, quantidade: quantidade });
            console.log('Item adicionado com sucesso!');
        }
        this.salvarEstoque();
    };
    ServiceEstoque.prototype.remover = function (nome) {
        var _this = this;
        var itemIndex = this.estoque.findIndex(function (item) { return item.nome === nome; });
        if (itemIndex !== -1) {
            var item = this.estoque[itemIndex];
            console.log("Item encontrado: ".concat(item.nome, ", peso: ").concat(item.peso, ", valor: ").concat(item.valor, ", quantidade: ").concat(item.quantidade));
            var confirmacao = this.prompt('Tem certeza que deseja remover este item? (s/n): ');
            confirmacao.then(function (resposta) {
                if (resposta.toLowerCase() === 's') {
                    _this.estoque = _this.estoque.filter(function (item) { return item.nome !== nome; });
                    console.log('Item removido com sucesso!');
                    _this.salvarEstoque();
                }
                else {
                    console.log('Operação cancelada.');
                }
            });
        }
        else {
            console.log('Item não encontrado.');
        }
    };
    ServiceEstoque.prototype.listar = function () {
        console.log('Itens em estoque: ');
        this.estoque.forEach(function (item) {
            var peso_formatado = item.peso.toFixed(3);
            var valor_formatado = item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            console.log("item: ".concat(item.nome, ", peso: ").concat(peso_formatado, ", valor: ").concat(valor_formatado, ", quantidade: ").concat(item.quantidade));
        });
    };
    ServiceEstoque.prototype.valor_total = function () {
        var v_total = this.estoque.reduce(function (acc, item) { return acc + item.valor * item.quantidade; }, 0);
        var v_total_formatado = v_total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        console.log("Valor total: ".concat(v_total_formatado));
    };
    ServiceEstoque.prototype.peso_total = function () {
        var p_total = this.estoque.reduce(function (acc, item) { return acc + item.peso * item.quantidade; }, 0);
        console.log("Peso total: ".concat(p_total, " kg"));
    };
    ServiceEstoque.prototype.valor_medio = function () {
        var v_total = this.estoque.reduce(function (acc, item) { return acc + item.valor * item.quantidade; }, 0);
        var q_total = this.estoque.reduce(function (acc, item) { return acc + item.quantidade; }, 0);
        var v_medio = v_total / q_total;
        var v_medio_formatado = v_medio.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        console.log("Valor m\u00E9dio: ".concat(v_medio_formatado));
    };
    ServiceEstoque.prototype.peso_medio = function () {
        var p_total = this.estoque.reduce(function (acc, item) { return acc + item.peso * item.quantidade; }, 0);
        var q_total = this.estoque.reduce(function (acc, item) { return acc + item.quantidade; }, 0);
        var p_medio = p_total / q_total;
        console.log("Peso m\u00E9dio: ".concat(p_medio, " kg"));
    };
    ServiceEstoque.prototype.n_itens = function () {
        var i_total = this.estoque.reduce(function (acc, item) { return acc + item.quantidade; }, 0);
        console.log("N\u00FAmero de itens: ".concat(i_total));
    };
    ServiceEstoque.prototype.n_produtos = function () {
        console.log("N\u00FAmero de produtos: ".concat(this.estoque.length));
    };
    return ServiceEstoque;
}());
exports.default = new ServiceEstoque();
