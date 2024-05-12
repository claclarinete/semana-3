import service from '../service/estoqueService';


export async function adicionar() {
    const nome = await service.prompt('Nome: ');
    const pesoInput = await service.prompt('Peso (em kg): ');
    const valorInput = await service.prompt('Valor: ');
    const quantidadeInput = await service.prompt('Quantidade: ');

    // Verificações para garantir que as entradas sejam válidas
    if (!nome || isNaN(parseFloat(pesoInput)) || isNaN(parseFloat(valorInput)) || isNaN(parseInt(quantidadeInput))) {
        console.log('Entradas inválidas. Certifique-se de fornecer valores válidos para peso, valor e quantidade.');
        return;
    }

    const peso = parseFloat(pesoInput);
    const valor = parseFloat(valorInput);
    const quantidade = parseInt(quantidadeInput);

    service.adicionar(nome, peso, valor, quantidade);
}

export async function remover() {
    const nome = await service.prompt('Item a ser removido: ');

    service.remover(nome);
}

export async function listar() {
    service.listar();
}

export async function valor_total() {
    service.valor_total();
}

export async function peso_total() {
    service.peso_total();
}

export async function valor_medio() {
    service.valor_medio();
}

export async function peso_medio() {
    service.peso_medio();
}

export async function n_itens() {
    service.n_itens();
}

export async function n_produtos() {
    service.n_produtos();
}

