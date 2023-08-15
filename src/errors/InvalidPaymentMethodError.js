export class InvalidPaymentMethodError extends Error {
    constructor(message) {
        super(message || "Forma de pagamento inválida!");
        this.status = 400;
    }
}
