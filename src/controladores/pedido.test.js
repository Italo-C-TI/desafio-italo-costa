import { processaPedido } from "./pedido.js";
import { NoItemError, InvalidItemError, InvalidAmountError, InvalidExtraItemError } from "../errors/index.js";

jest.mock('../cardapio/getCodigos.js', () => ({
    getCodigos: async () => ({
        codigosPrincipaisValidos: ['principal1', 'principal2'],
        codigosCombosValidos: ['combo1', 'combo2'],
        codigosExtrasValidos: ['extra1', 'extra2'],
        extras: [{ codigo: 'extra1', valor: 2, adicionalDe: [] }],
        principais: [{ codigo: 'principal1', valor: 5 }],
        combos: [{ codigo: 'combo1', valor: 10 }],
    }),
}));

describe('processaPedido', () => {
    it('deve lançar NoItemError quando a lista de itens estiver vazia', async () => {
        await expect(processaPedido([])).rejects.toThrow(NoItemError);
    });

    it('deve lançar InvalidItemError para itens inválidos', async () => {
        const itens = ['invalido,1'];
        await expect(processaPedido(itens)).rejects.toThrow(InvalidItemError);
    });

    it('deve lançar InvalidAmountError para quantidades inválidas', async () => {
        const itens = ['principal1,0'];
        await expect(processaPedido(itens)).rejects.toThrow(InvalidAmountError);
    });

    it('deve lançar InvalidExtraItemError para extras sem item principal correspondente', async () => {
        const itens = ['extra1,1'];
        await expect(processaPedido(itens)).rejects.toThrow(InvalidExtraItemError);
    });

    it('deve processar o pedido corretamente', async () => {
        const itens = ['principal1,2', 'extra1,1'];
        const pedido = await processaPedido(itens);

        expect(pedido).toBeDefined();
    });
});