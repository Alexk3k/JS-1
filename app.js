/*
    Найти среднее значение последовательности
    чисел с помощью reduse
*/

const arr = [1, 4, 4, 10];

const average = arr.reduce((acc, el, i) => {
    if (i != arr.length - 1){
    return acc + el;
    } else {
            return (acc + el) / arr.length;
        }
    
}, 0);

console.log(average);