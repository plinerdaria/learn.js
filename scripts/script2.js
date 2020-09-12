// // // // let admin;
// // // // let name = "John";
// // // // admin = name;
// // // // alert(admin);
// // // let number = 4 > 2;
// // // alert(`Ghbdtn ${number}`);
// // alert("3" * "4");
// let rt = "";
// rt = Number(rt);
// alert(rt);

// 1 случай
// ++counter
let counterPref = 1;
let a = ++counterPref;// сначала прибавляем к counterPref единицу, потом записываем counterPref в а
counterPref=counterPref+1;// тоже самое, только построчно
let a = counterPref;// тоже самое, только построчно
console.log("counterPref", counterPref); // 2
console.log("a", a); // 2
console.log("//");
// 2 случай
// ++counter
let counterPostfix = 1;
let a1 = counterPostfix++;// сначала записываем counterPostfix в a1, потом увеличиваем (инкрементируем) counterPostfix на 1
let a1 = counterPostfix;// тоже самое, только построчно
counterPostfix++;// тоже самое, только построчно
console.log("counterPostfix", counterPostfix); // 2
console.log("a1", a1); // 1

// let result;
// login == "Сотрудник"
//   ? (result = "Привет")
//   : login == "Директор"
//   ? (result = "Здравствуйте")
//   : login == " "
//   ? (result = "Нет логина")
//   : (result = "");
////////////////
// (что-то==чему-то)-это условие
// ?=если

// (а=б)-то вот это

// : = в противном случае

// (что-то !=чему-то)-это условие
// ?=если

// (а=с)-то вот это

// : = в противном случае
// (а!=с)
// ^
// |
// то же самое, только через if else

// if(что-то==чему-то){// если вот это условие верно, то
//     а=б // Отработает этот сценарий
// }else if(что-то !=чему-то){// в противном случае при верном исходе этого условия
//     а=с// отработает этот сценарий
// }
// else{ // вот это отработает, если не отработало НИЧЕГО выше.
//     а!=с
// }
