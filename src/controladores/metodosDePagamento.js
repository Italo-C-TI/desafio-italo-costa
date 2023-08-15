import { InvalidPaymentMethodError } from "../errors/index.js";

const metodosDePagamentoAceitos = ['dinheiro', 'debito', 'credito' ];

export const verficaMetodoDePagamento = (metodoDePagamento)=>{
if(!metodosDePagamentoAceitos.includes(metodoDePagamento)){
    throw new InvalidPaymentMethodError();
};
}

export const processaValorPorMetodoDePagamento = (metodoDePagamento,valorTotal)=>{
    let valorTotalDefinitivo = valorTotal;
    if(metodoDePagamento === "credito"){
        valorTotalDefinitivo = valorTotal + (valorTotal * 0.03);
    };
    if(metodoDePagamento === "dinheiro"){
        valorTotalDefinitivo = valorTotal - (valorTotal * 0.05);
    };

    return valorTotalDefinitivo;
    }