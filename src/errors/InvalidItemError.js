export class InvalidItemError extends Error{
    constructor(message) {
        super(message || "Item inválido!");
        this.status = 400;
    }
}
