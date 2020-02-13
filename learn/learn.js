"use strict";
// if (num < 49) {
//    console.log('Неверно!');
// } else if (num > 100) {
//    console.log('Много');
// } else {
//    console.log('Верно!');
// }
// (num == 50) ? console.log('Верно!') : console.log('Неверно!');

// switch (num) {
//    case num < 49:
//       console.log('Неверно!');
//       break;
//    case num < 80:
//       console.log('Много');
//       break;
//    case num < 100:
//       console.log('Много еще');
//       break;
//    case 50:
//       console.log('Верно!');
//       break;
//    default:
//       console.log('Что то пошло не так!');
//       break;
// }



// while (num < 55) {
//    console.log(num);
//    num++;
// }
// let num = 50;
// do {
//    console.log(num);
//    num++;
// } 
// while (num < 55);
// let num = 20; // Это переменная глобальная .

// function showFirstMessage(text) {
//    alert(text);
//    let num = 10; // это переменная локальная, ее видно только в функиции.
//    console.log(num);
// }
// Замыкание - это функция вместо со всеми внешними переменными которые ей доступны. 
// showFirstMessage('Hello World');
// console.log(num);

function calc(a, b) {
   return (a + b);

} // function declaration - объявлена в потоке кода Б их можно вызывать до начала их объявления
console.log(calc(3, 5));
console.log(calc(2, 8));

let retVar = function () {
   let num = 50;
   return num;
};
// function expression - это когда функциию присваиванием к переменной, создается только тогда , когда код до нее доходит, ее нельзя вызвать за ранее.
let anotherNum = retVar();
console.log(anotherNum);

// Массивы

let options = {
   width: 1024,
   height: 1024,
   name: "test"
};

console.log(options.name);
options.bool = false;
options.color = {
   border: 'red',
   bg: 'green'
};
delete options.bool;

console.log(options);

for (let key in options) {
   console.log('Свойство ' + key + ' имеет значение ' + options[key]);
}
console.log(Object.keys(options).length);

let arr = [1,2,3,4,5];

arr.pop(); // удалить последний элемент
arr.push("5"); // запушить в конец массива
arr.shift(); // удаляет 1 элемент
arr.unshift('1'); // Добавляет 1 элемент

for (let i = 0 ; i <arr.length; i++) {
   console.log(arr[i]);
}

arr.forEach(function(item, i , mass){
   console.log(i + ": " + item + " (массив: " + mass + " )");

});