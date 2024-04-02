'use strict';

document.querySelector('.input').value = 'Write a text'

function submitForm(){
     const input = document.querySelector('.input').value;
    console.log(input);
    if(!input){
        return
    };
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
    // console.log(document.querySelector('.notification').getAttribute('Class'))
    document.querySelector('.notification').setAttribute('Class', 'notification')
    document.querySelector('.notification').setAttribute('key', 1)
    document.querySelector('.notification').setAttribute('user-id', 1)
    const textString = JSON.stringify({
        text : input
    });
    localStorage.setItem('text', textString)
}

function inpitChanged(e){
    if (e.code == 'Enter'){
        submitForm();
    }
}


// const newTextKey = document.querySelector('.panel').innerText
// console.log(newTextKey)
// localStorage.setItem("key", document.querySelector('.panel').innerText);
// console.log(localStorage)
// const info = JSON.stringify(localStorage);
// console.log(info)

