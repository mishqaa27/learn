window.addEventListener('DOMContentLoaded', function () {


   let products = document.querySelectorAll('.product'),
      buttons = document.querySelectorAll('button'),
      openBtn = document.querySelector('.open');
   function createCart() {
      let cart = document.createElement('div'),
         field = document.createElement('div'),
         heading = document.createElement('h2'),
         closeBtn = document.createElement('button');
      let deleteBtn = document.createElement('button');


      cart.classList.add('cart');
      field.classList.add('cart-field');
      closeBtn.classList.add('close');
      deleteBtn.classList.add('delete');

      heading.textContent = "В нашей корзине:";
      closeBtn.textContent = "Закрыть";
      deleteBtn.textContent = "Удалить товар";

      document.body.appendChild(cart);
      cart.appendChild(heading);
      cart.appendChild(field);
      cart.appendChild(closeBtn);
      cart - field.appendChild(deleteBtn);


   }

   createCart();

   // function deleteProduct() {

   // }

   // deleteProduct();

   let field = document.querySelector('.cart-field'),
      cart = document.querySelector('.cart'),
      closeBtn = document.querySelector('.close');

   function openCart() {
      cart.style.display = 'block';
   }
   function closeCart() {
      cart.style.display = 'none';
   }
   openBtn.addEventListener('click', openCart);
   closeBtn.addEventListener('click', closeCart);

   // for (let i = 0; i < buttons.length; i++) {
   //    buttons[i].addEventListener('click', function () {
   //       let item = products[i].cloneNode(true),
   //          btn = item.querySelector('button');
   //       btn.remove();
   //       field.appendChild(item);
   //       products[i].remove();
   //    });
   // }
   buttons.forEach(function (item, i) {
      item.addEventListener('click', function () {
         let item = products[i].cloneNode(true),
            btn = item.querySelector('button');
         btn.remove();
         field.appendChild(item);
         products[i].remove();
      });
   });
   // Создать в корзине кнопку удалить товар, так что бы товар удалялся из корзины

});