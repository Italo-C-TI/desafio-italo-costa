export class NoItemError extends Error{
    constructor({ status }) {
        super(message);
        this.name = 'NoItem';
        this.status = status || 400;
        this.message = 'Não há itens no carrinho de compra!'
      }
}
