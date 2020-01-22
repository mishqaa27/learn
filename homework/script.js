'use strick';
let money = +prompt('Ваш бюджет на месяц?', ""),
   time = prompt('Введите дату в формате YYYY-MM-DD', "");

let appData = {
   budget: money,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: false,
   timeData: time
};

// let i = 0;
// do {
//    let a = prompt('Введите обязательную статью расходов в этом месяце', ""),
//       b = +prompt('Во сколько обойдется?', "");
//    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != "" && b != "" && a.length < 50) {
//       console.log('done');

//       appData.expenses[a] = b;
//    } else {
//       console.log('bad result');
//       i--;
//    }

//    i++;
// } while (i < 2);


// let i = 0;

// while (i < 2) {
//    let a = prompt('Введите обязательную статью расходов в этом месяце', ""),
//       b = +prompt('Во сколько обойдется?', "");

//    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != "" && b != "" && a.length < 50) {
//       console.log('done');
//       appData.expenses[a] = b;
//    } else {
//       console.log('bad result');
//       i--;
//    }
//    i++;
// }

for (let i = 0; i < 2; i++) {
   let a = prompt('Введите обязательную статью расходов в этом месяце', ""),
      b = prompt('Во сколько обойдется?', "");


   if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != "" && b != "" && a.length < 50) {
      console.log('done');
      appData.expenses[a] = b;

   } else {
      console.log('bad result');
      i--;

   }
}

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневый бюджет: " + appData.moneyPerDay);

