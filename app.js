/*
    Создайте объект пользователя с паролем.
    С помощью функции ниже удалить пароль сделав
    функцию сброса пароля
*/

function removePassword(reset){
    if(reset){
        this.password = undefined;
    } else {
        this.password = '1';
    }
};

const user = {
    login : 'Oleg@oleg.ru',
    password : '123456'
}

const userResetPass = removePassword.bind(user, true);

console.log(userResetPass());
console.log(user)