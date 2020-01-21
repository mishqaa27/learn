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

let a1 = prompt('Введите обязательную статью расходов в этом месяце', ""),
   b1 = +prompt('Во сколько обойдется?', ""),
   a2 = prompt('Введите обязательную статью расходов в этом месяце', ""),
   b2 = +prompt('Во сколько обойдется?', "");

appData.expenses[a1] = b1;

appData.expenses[a2] = b2;

console.log(alert(appData.budget / 30));

console.log(appData);