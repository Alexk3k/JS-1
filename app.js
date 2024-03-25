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
    // document.querySelector('.notification').classList.add('notification_active')
    console.log(document.querySelector('.notification').getAttribute('Class'))
    document.querySelector('.notification').setAttribute('Class', 'notification')
    document.querySelector('.notification').setAttribute('key', 1)
    document.querySelector('.notification').setAttribute('user-id', 1)

}

function inpitChanged(e){
    if (e.code == 'Enter'){
        submitForm();
    }
}

// console.log(document.querySelector('.one').innerText);
// console.log(document.querySelector('.one ~ div').innerText);
console.log(document.querySelectorAll('.one')[0].innerText);
console.log(document.querySelectorAll('.one')[1].innerText);
// console.log(document.querySelector('#two').innerText);
console.log(document.getElementById('two').innerText)
console.log(document.querySelector('[user-id]').innerText)