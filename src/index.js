import {CaixaDaLanchonete} from './caixa-da-lanchonete.js'

const caixa = new CaixaDaLanchonete();

async function calcularValorTotal() {
    try {
        const metodoDePagamento = "credito";
        const itens = [];

        const valorTotal = await caixa.calcularValorDaCompra(metodoDePagamento, itens);

        console.log(valorTotal);
    } catch (error) {
       // console.error(error.message + 'aaaasdjhasdm,dsajhdasjhdaskj')
        console.error(error.message).trim();
    }
}

calcularValorTotal();