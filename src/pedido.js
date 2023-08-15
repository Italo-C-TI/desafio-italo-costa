export class Pedido {
    constructor() {
        this.items = [];
        this.valorTotal = 0 ;
        this.dataPedido = new Date();
        this.metodoDePagamento = '';
    }

    adicionarItem(item) {
        this.items.push(item);
    }

    setValorTotal(valorTotal){
        this.valorTotal = valorTotal ;
    }

}