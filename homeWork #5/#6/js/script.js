let menu = document.getElementsByClassName('menu-item'),
  header = document.querySelector('ul'),
  title = document.getElementById('title'),
  adv = document.getElementsByClassName('adv')[0].remove(), // лучший способ удаления.
  apple = document.getElementById('prompt');



// console.log(menu);

header.replaceChild(menu[2], menu[1]); // замена пункта


let li = document.createElement('li'); // создание пункта

li.classList.add('menu-item');

header.insertBefore(li, menu[2]); // добавить пункт

li.textContent = 'Третий пункт'; // Добавить текст 

// for (var i = 0; i < document.body.childNodes.length; i++) {
//    console.log(document.body.childNodes[i]); // Text, DIV, Text, UL, ..., SCRIPT
// }
document.body.style.backgroundImage = "url(../img/apple_true.jpg)"; // замена фона

title.textContent = 'Мы продаем только подлинную технику Apple'; // изменение текста

// adv.remove(); // удаление элемента.

// apple.textContent = prompt('Какое ваше отношение к технике apple?' , '');

function forApple() {
  apple.textContent = prompt('Какое ваше отношение к технике apple?', '');

}
setTimeout(forApple, 500); // запустить чуть позже, чтобы сайт прогрузился.