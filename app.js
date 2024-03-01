/* вытащить имя и фамилию в отдельные переменные */

const fulluserName = 'Вася aka Terminator T3rdinat0r Пупкин';

const userName = fulluserName.slice(0, fulluserName.indexOf(' '))
const userSername = fulluserName.slice(fulluserName.lastIndexOf(' ') + 1);

console.log(userName + ' ' + userSername);
console.log(userName);
console.log(userSername);