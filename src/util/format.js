/**
 * Exporta como função a constante formatPrice que implementa a formatação nativa
 * de preços do javascript.
 *
 * Para utilizar:
 * import { formatPrice } from 'util/format';
 *
 * formatPrice(variavel_a_ser_formataca)
 */
export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
