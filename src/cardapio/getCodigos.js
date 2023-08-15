import { getCardapio } from "./getCardapio.js";

export const getCodigos =  async () => {
    const {principais,combos, extras} = await getCardapio();

    const codigosPrincipaisValidos = Object.keys(principais.reduce((acumulador, atual) => {
        acumulador[atual.codigo] = true;
        return acumulador;
    }, {}));

    const codigosCombosValidos = Object.keys(combos.reduce((acumulador, atual) => {
        acumulador[atual.codigo] = true;
        return acumulador;
    }, {}));

    const codigosExtrasValidos = Object.keys(extras.reduce((acumulador, atual) => {
        acumulador[atual.codigo] = true;
        return acumulador;
    }, {}));

    return {codigosPrincipaisValidos, codigosCombosValidos, codigosExtrasValidos, extras, combos, principais };
}
