/* Реальизовать методы увеличения и уменьшения баланса,
    при котором каждая операция сохраняется в массив
    opetarions в виде {reason : 'Оплата налогов', sum : -100}.
    Возвращается true, если успешно и false, если не хватает баланса
    Так же реализовать метод вволда числа операций по кошельку
*/

const wallet = {
    balance : 0,
    increase : function(sum, reason){
        this.balance += sum;
        this.operations.push({
            reason : reason,
            sum : sum
        })
        return true;
        
},
    decrease : function(sum, reason){
        if(this.balance < sum){
            console.log('Not enought money');
            return false;
        }
        this.balance -= sum;
        this.operations.push({
            reason : reason,
            sum : -sum
        })
        return true;
},
    getOperationLenght :function (){
        return this.operations.length;
    },
    operations : []
};

console.log(wallet.increase(1000, 'ЗП'));
console.log(wallet.getOperationLenght());
console.log(wallet.decrease(2000, 'Попука ПК'));
console.log(wallet.getOperationLenght());
console.log(wallet.decrease(500, 'Покупка Телефона'));
console.log(wallet.getOperationLenght());
console.log(wallet.balance);
console.log(wallet.operations);

