/*
    Пользователь хочет приобрести игру в магазине
    Он может это сделать только если:
    - Его баланс больше 1000 (balance)
    или число бонусов больше 100 (bonusBalance)
    - Он не забанен (isBanned)
    - Игра не куплена (isExist)
    - Игра в продаже (isSelling)
    Напишите условие для покупи и выведиет в консоль 
    результат
*/

const balance = 1001;
const bonusBalance = 100;
const isBanned = false;
const isExist = true;
const isSelling = true;

const canBuy = (balance > 1000 || bonusBalance > 100) 
    && !isBanned
    && !isExist
    && isSelling;
console.log(`Can buy a game ${canBuy ? 'Yes' : 'No'}`);

if (balance > 1000 || bonusBalance > 100){
    switch(true){
        case isSelling:
        switch(false){
            case isBanned && isExist:
            console.log('User not banned!');
            console.log("You can buy a game!");
            break;
        }
    }
} else {
    console.log('bye bye');
}
