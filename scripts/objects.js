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
