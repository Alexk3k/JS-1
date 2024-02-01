/*
    Есть выгрузка операций пользователя
    const operations = [1000, -700, 300, -500, -10000];
    а так же начальный баланс в 100$
    Необходимо сделать функции расчета:
    - Итогового баланса
    - Наличия отрицательного баланса (если после очередной операции
            баланс < 0, то выдавать False)
    - Расчета среднего расхода и среднего дохода
*/

const operations = [1000, -1700, 300, -500, 10000];
const startBalance = 100;

function showBalance(){
    let balance = startBalance;
    for (let i = 0; i < operations.length; i++) {
        balance += operations[i];
        if(balance < 0){
        console.log(false);
        }
    }
    console.log(balance)
}

function averageNum(){
    let aboveZeroNum = 0;
    let belowZeroNum = 0;
    let plusCount = 0;
    let minusCount = 0;

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] > 0){
            aboveZeroNum += operations[i];
            plusCount ++;
        }
        
        else if(operations[i] < 0){
            belowZeroNum += operations[i];
            minusCount ++;
        }
    }
    console.log(aboveZeroNum / plusCount);
    console.log(belowZeroNum / minusCount);
}

showBalance();
averageNum();