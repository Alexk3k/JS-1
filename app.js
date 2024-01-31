/*
    Дан произвольный url -
    'https://purpleschool.ru/course/javascript'
    Нужно сделать функцию, которая выводит в консоль:
    - Протокол (https)
    - Доменное имя (purpleschool.ru)
    - Путь внутри сайта (/course/javascript)
*/

const url = 'https://purpleschool.ru/course/javascript';
const url2 = 'https://docs.google.com/spreadsheets/d/';


function urlSplit(url){
    const [protocol, _, domain, ...path] = url.split('/')
    console.log(protocol, _, domain, path)
    console.log(`Протокол: ${protocol.split(':')[0]}`);
    console.log(`Доменное имя: ${domain}`);
    console.log(`Путь внутри сайта: ${path.join('/')}`);
    // const res = url.split('/');
    // const protocol = res[0];
    // const domain = res[2];
    // const path = res[3] + ('/') + res[4];
    // console.log('Протокол -', protocol);
    // console.log('Доменное имя -', domain);
    // console.log('Путь внутри сайта -', path);
}

urlSplit(url);
urlSplit(url2);