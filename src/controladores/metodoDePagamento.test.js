import { InvalidPaymentMethodError } from "../errors/index.js";
import { verficaMetodoDePagamento, processaValorPorMetodoDePagamento } from "./metodosDePagamento.js";

describe('verficaMetodoDePagamento', () => {
    test.each([
      ['dinheiro'],
      ['debito'],
      ['credito'],
    ])('método de pagamento válido: %p', (metodoDePagamento) => {
      expect(() => verficaMetodoDePagamento(metodoDePagamento)).not.toThrow();
    });
  
    test.each([
      ['especie'],
      ['cheque'],
      ['pix'],
    ])('método de pagamento inválido: %p', (metodoDePagamento) => {
      expect(() => verficaMetodoDePagamento(metodoDePagamento)).toThrow(InvalidPaymentMethodError);
    });
  });
  
  describe('processaValorPorMetodoDePagamento', () => {
    test.each([
      ['credito', 100, 103],
      ['dinheiro', 100, 95],
      ['debito', 100, 100],
    ])('processa valor por método de pagamento: %p', (metodoDePagamento, valorTotal, valorEsperado) => {
      const valorProcessado = processaValorPorMetodoDePagamento(metodoDePagamento, valorTotal);
      expect(valorProcessado).toBe(valorEsperado);
    });
  });