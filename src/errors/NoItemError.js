export class NoItemError extends Error{
    constructor(message) {
        super(message || "Não há itens no carrinho de compra!");
        this.status = 400;
    }
}
