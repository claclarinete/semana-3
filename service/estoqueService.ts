import * as constants from "constants";
import { readCSV, writeCSV } from "../model/readCSV";

interface Item {
    nome: string;
    peso: number;
    valor: number;
    quantidade: number;
}

class ServiceEstoque {
    private estoque: Item[] = [];
    private filename = 'estoque.csv';

    constructor() {
        this.carregarEstoque();
    }

    private async carregarEstoque(){
        try {
            const data = await readCSV(this.filename);
            this.estoque = data.map(row => ({
                nome: row[0],
                peso: parseFloat(row[1]),
                valor: parseFloat(row[2]),
                quantidade: parseInt(row[3])
            }));
        } catch (error) {
            if (error === 'ENOENT') {
                console.log('Arquivo não encontrado. Criando um novo...');
                await writeCSV(this.filename, []);
            } else {
                throw error;
            }
        }
    }

    private async salvarEstoque(){
        const data = this.estoque.map(item => [
            item.nome,
            item.peso.toString(),
            item.valor.toString(),
            item.quantidade.toString()
        ]);
        await writeCSV(this.filename, data);
    }

    async prompt(message: string): Promise<string> {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        return new Promise(resolve => {
            readline.question(message, (input: string) => {
                readline.close();
                resolve(input);
            });
        });
    }

    adicionar(nome: string, peso: number, valor: number, quantidade: number) {
        const itemIndex = this.estoque.findIndex(item => item.nome === nome);
        if(itemIndex !== -1) {
            console.log('Item já existe no estoque. Aumentando a quantidade...');
            this.estoque[itemIndex].quantidade += quantidade;
        } else {
            this.estoque.push({ nome, peso, valor, quantidade });
            console.log('Item adicionado com sucesso!');
        }
        this.salvarEstoque();
    }

    remover(nome: string) {
        const itemIndex = this.estoque.findIndex(item => item.nome === nome);
        if (itemIndex !== -1) {
            const item = this.estoque[itemIndex];
            console.log(`Item encontrado: ${item.nome}, peso: ${item.peso}, valor: ${item.valor}, quantidade: ${item.quantidade}`);
            const confirmacao = this.prompt('Tem certeza que deseja remover este item? (s/n): ');
            confirmacao.then((resposta: string) => {
                if (resposta.toLowerCase() === 's') {
                    this.estoque = this.estoque.filter(item => item.nome !== nome);
                    console.log('Item removido com sucesso!');
                    this.salvarEstoque();
                } else {
                    console.log('Operação cancelada.');
                }
            });
        } else {
            console.log('Item não encontrado.');
        }
    }

    listar() {
        console.log('Itens em estoque: ');
        this.estoque.forEach(item => {
            const peso_formatado = item.peso.toFixed(3);
            const valor_formatado = item.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
            console.log(`item: ${item.nome}, peso: ${peso_formatado}, valor: ${valor_formatado}, quantidade: ${item.quantidade}`)
        })
    }

    valor_total() {
        const v_total = this.estoque.reduce((acc, item) => acc + item.valor * item.quantidade, 0);
        const v_total_formatado = v_total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        console.log(`Valor total: ${v_total_formatado}`);
    }

    peso_total() {
        const p_total = this.estoque.reduce((acc, item) => acc + item.peso * item.quantidade, 0);
        console.log(`Peso total: ${p_total} kg`);
    }

    valor_medio() {
        const v_total = this.estoque.reduce((acc, item) => acc + item.valor * item.quantidade, 0);
        const q_total = this.estoque.reduce((acc, item) => acc + item.quantidade, 0);
        const v_medio = v_total / q_total;
        const v_medio_formatado = v_medio.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        
        console.log(`Valor médio: ${v_medio_formatado}`);
    }

    peso_medio() {
        const p_total = this.estoque.reduce((acc, item) => acc + item.peso * item.quantidade, 0);
        const q_total = this.estoque.reduce((acc, item) => acc + item.quantidade, 0);
        const p_medio = p_total / q_total;
        
        console.log(`Peso médio: ${p_medio} kg`);
    }

    n_itens() {
        const i_total = this.estoque.reduce((acc, item) => acc + item.quantidade, 0);
        console.log(`Número de itens: ${i_total}`)
    }

    n_produtos() {
        console.log(`Número de produtos: ${this.estoque.length}`);
    }

}

export default new ServiceEstoque();