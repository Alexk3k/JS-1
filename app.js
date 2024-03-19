/*
    Сделать функцию пользователя, которая берет за основу
    userInfo и за счет замыкания создает новый объект, с
    которым можно работать как user(1).increse(100)
*/

const userInfo = {
    balance : 0,
    operations : 0,
    increace(sum){
        this.balance +=sum;
        this.operations++;
    }
}

function user(){
    const userObj = {
    balance : 0,
    operations : 0,
    increace(sum){
        this.balance +=sum;
        this.operations++;
    }
}
    return function(){
        return userObj
    }
}

const user1 = user()
user1().increace(100);
user1().increace(100);
console.log(user1())

const user2 = user();
user2().increace(150);
console.log(user2());

// function changeBalance(){
//     let balance = 0;
//     return function(sum){
//         balance += sum
//         console.log(`Balance : ${balance}`)
//     }
// }

// const change = changeBalance();

// change(100);
// change(-50);
// change(200);

// console.dir(change)