/* Замаскировать все, кроме последних 4х символов */
/* ***********8353 */

const card = '2342834503458353';

const last4Nums = card.slice(-4);
console.log(last4Nums);
const markedCardNumber = last4Nums.padStart(card.length, '*');
console.log(markedCardNumber);
