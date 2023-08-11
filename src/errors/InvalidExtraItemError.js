export class InvalidExtraItemError extends Error{
    constructor({ status }) {
        super(message);
        this.name = 'InvalidExtraItem';
        this.status = status || 400;
        this.message = 'Item extra não pode ser pedido sem o principal'
      }
}
