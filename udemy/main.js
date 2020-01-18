// let answers = [],
//    questions = [
//       'Как ваше имя',
//       'Как ваша фамилия',
//       'Как сколько вам лет'
//    ];
// for (let i = 0; i < questions.length; i++) {
//    answers[i] = prompt(questions[i], '');
// }
// let i = 0;
// do {
//    console.log(answers);
//    i++;

// } while (prompt(questions[i], ''));
// let i = 0;
// while (i < questions.length) {
//    console.log(prompt(questions[i], ''));
//    i++;
// }
// let i = 0;
// let n = 0;
// while (i < 5) {
//   i++;
//   if (i == 3) {
//     continue;
//   }
//   n += i; // 1,3,7,12 ; 5
// }

function myFirstApp(name, age) {
   alert(`Привет, меня зовут ${name} и это моя первая программа`);

   function showSkills() {
      let skills = ['html', 'css', 'javascript'];
      for (let i = 0; i < skills.length; i++) {
         alert(`Я владею: ${skills[i]}`);
     }
   }
   showSkills();
   function checkAge() {
      if (age > 18) {
         alert('Дальше лучше');
      } else {
         alert('Извини нам не по пути');
      }
      // age > 18
      // Дальше лучше.
      // Извини , нам не по пути.
   }
   checkAge();
   function calcPow(num) {
      return num * num;
   }
   console.log(calcPow(4)); // 16
   let factorial = function fac(n) {
      return n < 2 ? 1 : n * fac(n - 1);
   };
   console.log(factorial(8));
}
myFirstApp('mishqaa', 23);

