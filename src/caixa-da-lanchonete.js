import { processaPedido } from "./controladores/pedido.js";
import { verficaMetodoDePagamento,processaValorPorMetodoDePagamento } from "./controladores/metodosDePagamento.js";

class CaixaDaLanchonete {
    async calcularValorDaCompra(metodoDePagamento, itens) {
        verficaMetodoDePagamento(metodoDePagamento);
        const pedido = await processaPedido(itens);
        const valorTotalPorMetodoDePagamento = processaValorPorMetodoDePagamento(metodoDePagamento, pedido.valorTotal)
        pedido.setValorTotal(valorTotalPorMetodoDePagamento);


        return `R$ ${pedido.valorTotal.toFixed(2).replace('.',',')}`;
    }

}

export { CaixaDaLanchonete };
