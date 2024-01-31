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
    tasks.push(taskName); 
};

function removeTask(taskName) {
   const numTask = tasks.indexOf(taskName);
   if (numTask === -1){
    return;
   }
    return tasks.splice(numTask, 1);
};

function replaceToStartTask(taskName) {
    const result = removeTask(taskName);
    if (!result) {
        return;
    }
    tasks.unshift(result[0]);
};

addTask('Task 2');
addTask('Task 3');
addTask('Task 4');
console.log(tasks);

removeTask('Task 1');
console.log(tasks);

replaceToStartTask('Task 3')
console.log(tasks)