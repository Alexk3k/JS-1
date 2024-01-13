/*
    Вася положил 12 000$ на вклад 7% годовых с
    капитализацией 1 раз в месяц.
    Вывести в консоль, сможет ли нон купить дом за 13 500$
    через 2 года после снятия вклада. И остаток после покупки.

    Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах
*/ 

const deposit = 12000;
const rate = 0.07;
const depositLength = 24;
const houseCost = 13500;

let money = (deposit * (1+ rate / 12) ** depositLength)
console.log(money);

if (money > houseCost){
    console.log(`U have ${money} and Yes u can buy a house, gratz. 
Balance ${money - houseCost } ` )
} else{
    console.log(`U have ${money} not enought money :( `)
}