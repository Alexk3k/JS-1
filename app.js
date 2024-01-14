/* 
    Методом Prompt полиучите ответ пользователя 
    на вопрос "Сколько будет 7 + или - 15?", Если ответ верен
    введите в консиле "Успех", если нет - "Вы робот!,
    а если он введет "Я не робот", то тоже "Успех".
*/


let answer = prompt("Сколько будет 7 + или - 15?");
console.log(answer)

switch(true) {
    case Number(answer) === 22:
    case Number(answer) === -8:
    case answer === 'Я не робот':
        console.log('Успех');
        break;
    case answer === null:
        console.log('Зачем отменил?');
        break;
    default:
        console.log('Вы робот!');
        break;
}