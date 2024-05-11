import { adicionar, remover, listar, valor_total, peso_total, valor_medio, peso_medio, n_itens, n_produtos } from './controller/controleEstoque';

async function main() {
    while (true) {
        console.log('\nOpções:');
        console.log('1. Adicionar item');
        console.log('2. Remover item');
        console.log('3. Listar itens');
        console.log('4. Listar total');
        console.log('5. Listar média');
        console.log('6. Listar peso total');
        console.log('7. Listar peso médio');
        console.log('8. Listar número de itens');
        console.log('9. Listar número de produtos');
        console.log('10. Sair');

        const opcao = parseInt(await prompt('Escolha uma opção: '));

        switch (opcao) {
            case 1:
                await adicionar();
                break;
            case 2:
                await remover();
                break;
            case 3:
                await listar();
                break;
            case 4:
                await valor_total();
                break;
            case 5:
                await valor_medio();
                break;
            case 6:
                await peso_total();
                break;
            case 7:
                await peso_medio();
                break;
            case 8:
                await n_itens();
                break;
            case 9:
                await n_produtos();
                break;
            case 10:
                console.log('Saindo...');
                process.exit(0);
            default:
                console.log('Opção inválida. Tente novamente.');
        }
    }
}

async function prompt(message: string): Promise<string> {
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

main();