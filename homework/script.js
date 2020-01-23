'use strict';
let money, time;
function start() {
   money = +prompt('Ваш бюджет на месяц?', "");
   time = prompt('Введите дату в формате YYYY-MM-DD', "");

   while (isNaN(money) || money == "" || money == null) {
      money = +prompt('Ваш бюджет на месяц?', "");

   }
}
start();

let appData = {
   budget: money,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: true,
   timeData: time
};

function chooseExpenses() {
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
}
chooseExpenses();

function detectedDayBudget() {
   appData.moneyPerDay = (appData.budget / 30).toFixed();
   alert("Ежедневый бюджет: " + appData.moneyPerDay);
}
detectedDayBudget();


function detectedLevel() {
   if (appData.moneyPerDay < 100) {
      console.log('Минимальный уровеь достатка');
   } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log('Средний уровеь достатка');
   } else if (appData.moneyPerDay > 2000) {
      console.log('Высокий уровеь достатка');
   } else {
      console.log('Произошла ошибка');
   }

}
detectedLevel();

function checkSavings() {
   if (appData.savings == true) {
      let save = +prompt("Сумма накоплений?"),
         percent = +prompt("Под какой процент?");
      appData.monthIncome = (save / 100 / 12 * percent).toFixed();
      alert("Ежемесячный доход по вкладу :" + appData.monthIncome);
   }
}
checkSavings();

// function chooseOptExpenses() {
//    for (let i = 0; i < 3; i++) {
//       let costs = prompt("Статья необязательных расходов:"),
//          costsMoney = +prompt("Сколько обойдутся расходы");
//       if ((typeof (costs)) === 'string' && (typeof (costs)) != null && (typeof (costsMoney)) != null && costs != "" && costsMoney != "" && costs.length < 50) {

//          appData.optionalExpenses[costs] = costsMoney;
//       } else {
//          i--;
//       }
//    }
// }
function chooseOptExpenses() {
   for (let i = 1; i <= 3; i++) {
      let costs = prompt('Статья необязательных расходов');
      appData.optionalExpenses[i] = costs;
      console.log(appData.optionalExpenses);
   }
}


chooseOptExpenses();