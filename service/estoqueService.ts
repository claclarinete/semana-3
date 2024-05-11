import exp from "constants";
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
            this.estoque[itemIndex].quantidade += quantidade;
        } else {
            this.estoque.push({ nome, peso, valor, quantidade });
        }
        this.salvarEstoque();
    }

    remover(nome: string) {
        this.estoque = this.estoque.filter(item => item.nome !== nome);
        this.salvarEstoque();
    }

    listar() {
        console.log('Itens em estoque: ');
        this.estoque.forEach(item => {
            console.log(`item: ${item.nome}, peso: ${item.peso}, valor: ${item.valor}, quantidade: ${item.quantidade}`)
        })
    }

    valor_total() {
        const v_total = this.estoque.reduce((acc, item) => acc + item.valor * item.quantidade, 0);
        console.log(`Valor total: ${v_total}`);
    }

    peso_total() {
        const p_total = this.estoque.reduce((acc, item) => acc + item.peso * item.quantidade, 0);
        console.log(`Peso total: ${p_total}`);
    }

    valor_medio() {
        const v_total = this.estoque.reduce((acc, item) => acc + item.valor * item.quantidade, 0);
        const q_total = this.estoque.reduce((acc, item) => acc + item.quantidade, 0);
        const v_medio = v_total / q_total;
        
        console.log(`Valor médio: ${v_medio}`);
    }

    peso_medio() {
        const p_total = this.estoque.reduce((acc, item) => acc + item.peso * item.quantidade, 0);
        const q_total = this.estoque.reduce((acc, item) => acc + item.quantidade, 0);
        const p_medio = p_total / q_total;
        
        console.log(`Peso médio: ${p_medio}`);
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