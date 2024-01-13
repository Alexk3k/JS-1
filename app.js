/*
Ваша часовая ставка 80$ и вы готовы работать не
более 5 часов в день 5 дней в недлю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40 
часов работы.
Сейчас понедельникю
Вы должны уехать через 11 дней
Выведете в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё попросите?
*/ 

const hourPayment = 80;
const workHours = 5;
const workDays = 5;
const jobHours = 40;
const workDaysWOWeekend = 9;
const allDays = 11;

let payment = hourPayment * jobHours;
console.log(payment + "$");
console.log(workDaysWOWeekend < allDays); 