export class InvalidAmountError extends Error{
        constructor({ status }) {           
            this.name = 'InvalidAmount';
            this.status = status || 400;
            this.message = 'Quantidade inválida!'
            super(message);
          }
}
