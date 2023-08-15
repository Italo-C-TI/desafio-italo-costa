export class InvalidItemError extends Error{
    constructor(message) {
        super(message || "item inválido!");
        this.status = 400;
    }
}
