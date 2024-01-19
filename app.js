/*
    Пользователь:
    - Возраст
    - Наличие работы
    - Деньги
    Нужно проверить может ли он купить новый MacBook за 2000$?
    Он может брать не только свои деньги, но и взять кредит.
    Ему дадут 500$, только если ему больше 24-х лет и он
    имеет работу, 100$ если ему просто больше 24-х лет и 0 в
    ином случае.
    Напишите функцию, которая принимает данные пользователя
    и товара и возвращает true или false;
*/

//function ageCheck(age){
 //   if (age > 24)
 //   return true;
 //   {
 //       return false
 //   }
//}

//function jobCheck(haveJob){
//    if (haveJob === 'Yes')
//    return true;
//    {
//        return false
//    }
//}

function getCredit(money, age, haveJob){
    if (age > 24 && haveJob === true){
    return money + 500;
}
    else if (age > 24 && haveJob === false){

    return money + 100;
}
    else (age < 24 && haveJob === false)
    {
    return money + 0;
}
}

function getMacBook(MacBookPrice, money, age, haveJob){
   const enoughtMoney = getCredit(money, age, haveJob);
   console.log(enoughtMoney);
   if(enoughtMoney >= MacBookPrice){
    buy = true;
   }
   else
   {
    buy = false
   }
   return console.log(buy);
   
}

//console.log(ageCheck(25));
//console.log(jobCheck('Yes'));
//console.log(getCredit(2000, 25, true));
console.log(getMacBook(2000, 1900, 25, true));

