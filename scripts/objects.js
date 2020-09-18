// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

// let user = {
//     name: 'John',
//     surname: 'Smith'
// }
// user.name = 'Pete';
// delete user.name;

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

// function isEmpty() {
//   if (object()) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Создать объект в котором 10 объектов юзеров с полями имя фамилия  возраст. Создавать с помощью цикла
// let users = {};
// let user;
// let group;
// let groups;
// function generatedFollowers(users) {
//   let arrayOfIds = [];
//   for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
//     arrayOfIds.push(users["user" + Math.floor(Math.random() * 10)]._id);
//   }
//   return arrayOfIds;
// }
// for (let i = 0; i < 10; i++) {
//   user = {
//     _id: Date.now() + i,
//     name: "John" + i,
//     surname: "Smith",
//     age: Math.floor(Math.random() * (100 - 10)) + 10,
//   };
//   users = { ...users, ["user" + i]: user };
//   //   users["user" + i] = user;
// }
// console.log(users);
// for (let i = 0; i < 4; i++) {
//   group = {
//     _id: Date.now() + i,
//     name: "group" + i,
//     admin: users["user" + Math.floor(Math.random() * 10)]._id,
//     followers: generatedFollowers(users),
//   };
//   groups = {
//     ...groups,
//     ["group" + i]: group,
//   };
// }
// console.log(groups);

// let user = {
//   name: "Джон",
//   age: 30,

//   sayHi() {
//     // this - это "текущий объект"
//     console.log(user.name);
//     console.log(this.name);
//   },
// };
// user.sayHi();
// let admin = { ...user };
// admin.name = "admin";
// admin.sayHi();
// console.log(admin.sayHi);

// (function sayHi() {
//   console.log(this.name);
//   console.log(this);
// })();

// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// +1 создаем функцию
// +2 запрашиваем и сохраняем 2 значения
// 3 записываем их как свойства объекта
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
//   // ... ваш код ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// let calculator = {
//   read() {
//     let question = prompt("Введите число", 3);
//     let anotherQuestion = prompt("Введите число", 10);
//     calculator.value1 = question;
//     calculator.value2 = anotherQuestion;
//   },
//   sum() {
//     return Number(this.value1) + Number(this.value2);
//   },
//   mul() {
//     return this.value1 * this.value2;
//   },
// };
// console.log(calculator.read());
// alert(calculator.sum());
// alert(calculator.mul());
// console.log(calculator.sum());
// console.log(calculator.mul());
// console.log(calculator);
