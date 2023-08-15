import { InvalidItemError,NoItemError,InvalidExtraItemError,InvalidAmountError } from "../errors/index.js";
import { getCodigos } from "../cardapio/getCodigos.js";
import { Pedido } from "../pedido.js";
import { ItemDoPedido } from "../itemDoPedido.js";

export const processaPedido = async (itens) => {
    const pedido = new Pedido();

    if (itens.length <= 0) {
        throw new NoItemError();
    }
    
    const { codigosPrincipaisValidos, codigosCombosValidos, codigosExtrasValidos, extras, principais, combos } = await getCodigos();
    
    let valorTotal = 0;

    for (let item of itens) {
        const [codigo, quantidade] = item.split(',');

        if (!codigo || (!codigosPrincipaisValidos.includes(codigo) && !codigosCombosValidos.includes(codigo) && !codigosExtrasValidos.includes(codigo))) {
            throw new InvalidItemError();
        }
        if (!quantidade || parseInt(quantidade) <= 0) {
            throw new InvalidAmountError();
        }

        if (codigosPrincipaisValidos.includes(codigo)) {
            const principal = principais.find(p => p.codigo === codigo);
            if (principal) {
                valorTotal += principal.valor * parseInt(quantidade);
            }
        }

        if (codigosCombosValidos.includes(codigo)) {
            const combo = combos.find(c => c.codigo === codigo);
            if (combo) {
                valorTotal += combo.valor * parseInt(quantidade);
            }
        }

        if (codigosExtrasValidos.includes(codigo)) {
            const extra = extras.find(e => e.codigo === codigo);
            if (extra) {
                valorTotal += extra.valor * parseInt(quantidade);
            }
        }
        
        if (codigosExtrasValidos.includes(codigo)) {
            const extra = extras.find(extra => extra.codigo === codigo);
            
            if (extra) {
                for (const adicionalDeCodigo of extra.adicionalDe) {
                    if (!itens.some(item => item.startsWith(`${adicionalDeCodigo},`))) {
                        throw new InvalidExtraItemError();
                    }
                }
            }
        }
        const itemDoPedido = new ItemDoPedido();
        pedido.adicionarItem(itemDoPedido)
        pedido.setValorTotal(valorTotal)
    }

    return pedido;
};