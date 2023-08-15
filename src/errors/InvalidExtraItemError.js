export class InvalidExtraItemError extends Error{
    constructor(message) {
        super(message || "Item extra não pode ser pedido sem o principal");
        this.status = 400;
    }
}
