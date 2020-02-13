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
   timeData: time,
   chooseExpenses: function () {
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
   },
   detectedDayBudget: function () {
      appData.moneyPerDay = (appData.budget / 30).toFixed();
      alert("Ежедневый бюджет: " + appData.moneyPerDay);
   },
   detectedLevel: function () {
      if (appData.moneyPerDay < 100) {
         console.log('Минимальный уровеь достатка');
      } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
         console.log('Средний уровеь достатка');
      } else if (appData.moneyPerDay > 2000) {
         console.log('Высокий уровеь достатка');
      } else {
         console.log('Произошла ошибка');
      }
   },
   checkSavings: function () {
      if (appData.savings == true) {
         let save = +prompt("Сумма накоплений?"),
            percent = +prompt("Под какой процент?");
         appData.monthIncome = (save / 100 / 12 * percent).toFixed();
         alert("Ежемесячный доход по вкладу :" + appData.monthIncome);
      }
   },
   chooseOptExpenses: function () {
      for (let i = 1; i <= 3; i++) {
         let costs = prompt('Статья необязательных расходов');
         appData.optionalExpenses[i] = costs;
         console.log(appData.optionalExpenses);
      }
   },
   chooseIncome: function () {
      let items = prompt('Что принесет вам доп. доход? (перечислите через запятую)', '');

      if (typeof (items) != "string" || typeof (items) == null || items == "") {
         console.log('Вы ввели некорректные данные или не ввели вовсе');
      } else {
         appData.income = items.split(', ');
         appData.income.push(prompt('Может что то еще?'));
         appData.income.sort();
      }

      appData.income.forEach(function (item, i) {
         alert("Способы доп. зарботка: " + (i + 1) + " - " + item);
      });
   }

};
for (let key in appData) {
   console.log("Наша программа включает в себя " + key + " - " + appData[key]);
}












// while (items != "string" && items == '' && items == null) {
   //    items = prompt('Что принесет вам доп. доход? (перечислите через запятую)', '')
   //    appData.income = items.split(', ');
   // }