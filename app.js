/*
    Дан список задач
    const tasks = ['Задача 1'];
    Сделать функции:
    - Добавление задачи в конец
    - Удаление задачи по назвапнию
    - Перенос задачи в начало списка по названию
    Всегда меняем исходных массив
*/

const tasks = ['Task 1'];

function addTask(taskName) {
    tasks.push(taskName) 
};
addTask('Task 2');
addTask('Task 3');
addTask('Task 4');

console.log(tasks);

function removeTask(taskName) {
   const numTask = tasks.indexOf(taskName);
   if (numTask === -1){
    return;
   }
    tasks.splice(numTask, 1);
};
removeTask('Task 1');
console.log(tasks)

function replaceToStartTask(taskName) {
    const numTask = tasks.indexOf(taskName);
    if (numTask === -1){
        return;
    }
    const oldTask = tasks[numTask];
    tasks.splice(numTask, 1);
    tasks.unshift(oldTask); 
    };

replaceToStartTask('Task 3')


console.log(tasks)