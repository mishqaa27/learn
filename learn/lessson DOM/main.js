let box = document.getElementById('box'),
   btn = document.getElementsByTagName('button'),
   circle = document.getElementsByClassName('circle'),
   heart = document.querySelectorAll('.heart'),
   oneHeart = document.querySelector('.heart'),
   wrapper = document.querySelector('.wrapper');

// console.log(box);
// console.log(btn);
// console.log(btn[0]);
// console.log(circle[2]);
// console.log(heart[1]);
// console.log(oneHeart);

box.style.backgroundColor = "orange";
btn[1].style.borderRadius = "100%";
circle[0].style.backgroundColor = "red";
circle[1].style.backgroundColor = "yellow";
circle[2].style.backgroundColor = "green";

// for (let i = 0; i < heart.length; i++) {
//    heart[i].style.backgroundColor = 'green';
// }
// heart.forEach(function(item , i , hearts){
//    item.style.backgroundColor = 'blue';
// }); // Актуальный способ.
let div = document.createElement('div'),
   text = document.createTextNode('Здесь был я!'); 

div.classList.add('black');

document.body.removeChild(circle[1]); // удалить элемент.
wrapper.removeChild(heart[1]);
document.body.insertBefore(div, circle[0]); // Вставить перед чем то.
document.body.replaceChild(btn[1], circle[1]); // заменить элемент.
// div.innerHTML = "Hello world!";
div.textContent= 'Hello world!'; // aктуально.

// document.body.appendChild(div); // Добавить в конец body новый элемент.



console.log(div); 