import {CaixaDaLanchonete} from './caixa-da-lanchonete.js'

const caixa = new CaixaDaLanchonete();

async function calcularValorTotal() {
    try {
        const metodoDePagamento = "credito";
        const itens = ["queijo,1"];

        const valorTotal = await caixa.calcularValorDaCompra(metodoDePagamento, itens);

        console.log(valorTotal);
    } catch (error) {
        console.error(error.message);
    }
}

calcularValorTotal();