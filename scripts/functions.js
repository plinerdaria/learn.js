// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }

// function checkAge(age) {
//   return age > 18 ? true : console.log("Родители разрешили?");
// }
// checkAge(16);

//  Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// function min(a, b) {
//   if (a > b) {
//     return b;
//   } else {
//     return a;
//   }
// }
// console.log(min(1, 10));
// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n)

// function pow(x, n) {
//   return x ** n;
// }
// console.log(pow(6, 2));

// function numbers(a, b, c) {
//   if (a >= b && b >= c) {
//     return `${a}, ${b}, ${c}`;
//   } else if (a <= b && b <= c) {
//     return `${c}, ${b}, ${a}`;
//   } else if (b >= c && a <= c) {
//     return `${b}, ${c}, ${a}`;
//   } else if (a <= b && b >= c) {
//     return `${b}, ${a}, ${c}`;
//   } else if (a >= b && b <= c) {
//     return `${a}, ${c}, ${b}`;
//   } else {
//     return `${c}, ${a}, ${b}`;
//   }
// }
// let result = numbers(8, 13, 13);
// console.log(result);

// function calcNumbers(a, b, c, d) {
//   function sumTwoNumbers(numOne, numTwo) {
//     return numOne + numTwo;
//   }
//   let result = sumTwoNumbers(sumTwoNumbers(c, d), sumTwoNumbers(a, b));
//   return result;
// }
// let toColnsoleResult = calcNumbers(1, 2, 1, 4);
// console.log(toColnsoleResult);

// let sayHi = function () {
//   return console.log("Привет");
// };

// let resultSayHi = sayHi();
// console.log(resultSayHi);

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );

// let ask = (question, yes, no)=>{
//     confirm(question)? yes :no;
// }
// ask('Was your day lucky?', () => alert ("You have agreed"),() => alert ("You have disagreed")
// );
