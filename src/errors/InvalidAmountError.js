export class InvalidAmountError extends Error{
  constructor(message) {
    super(message || "Quantidade inválida!");
    this.status = 400;
}
}
