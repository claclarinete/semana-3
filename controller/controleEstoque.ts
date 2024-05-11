import service from '../service/estoqueService.ts';


export async function adicionar() {
    const nome = await service.prompt('Nome: ');
    const peso = parseFloat(await service.prompt('Peso: '));
    const valor = parseFloat(await service.prompt('Valor: '));
    const quantidade = parseInt(await service.prompt('Quantidade: '));

    service.adicionar(nome, peso, valor, quantidade)
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

