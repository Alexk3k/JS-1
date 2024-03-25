'use strict';

document.querySelector('.input').value = 'Write a text';

// document.querySelector('.button').addEventListener('click', function(){
//     const input = document.querySelector('.input').value;
//     console.log(input);
//     if(!input){
//         return
//     };
//     document.querySelector('.panel').innerText = input;
//     document.querySelector('.input').value = '';
// })

function changeClick() {
    const input = document.querySelector('.input').value;
    console.log(input);
    if(!input){
        return
    };
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
};