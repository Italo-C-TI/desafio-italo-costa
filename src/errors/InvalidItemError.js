export class InvalidItemError extends Error{
    constructor({ status }) {
        super(message);
        this.name = 'InvalidItem';
        this.status = status || 400;
        this.message = 'item inválido!'
      }
}
