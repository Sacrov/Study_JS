// while, do whille, for, for of, for in

// let i = 10;
// while (i--) {
//   // пока условие тру цикл выполняется
//   console.log(i);
// }

// do {
//   console.log("action");
// } while (i > 0);

// for (let i = 0; i < 10; i++) {

//   if (i === 3) {
//     continue;
//   }
//   if (i === 6) {
//     break;
//   }
//   console.log(i);
// }

// let str = "Hello";
// let res = "";

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i] + "!");
//   res += str[i] + "*";
// }
// console.log(res);

// let colors = ["white", "black", "yellow", "orange"];

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
//   colors[i] = colors[i].toUpperCase();
// }

// console.log(colors);

// const users = [
//   {
//     name: "Denis",
//     age: 30,
//   },
//   {
//     name: "Oleg",
//     age: 12,
//   },
//   {
//     name: "Maks",
//     age: 25,
//   },
//   {
//     name: "Olga",
//     age: 2,
//   },
// ];

// const usersObj = {};

// for (let i = 0; i < users.length; i++) {
//   // console.log(users[i].age);
//   usersObj[users[i].name] = users[i];
// }
// // console.log(usersObj['Denis']);

// const users =
//   {
//   name: "Denis",
//   age: 30,
// };

// for (let key in users) { //выдаст все ключи объекта
//   console.log(key);
//   // console.log(users[key]);
// }

// for (let value of users) {
//   //пройдется (переберет) количество всех массивов пока они не закончится (чуть более простой и читабельнее формат перебора массивов)
//   console.log(value);
// }

// -------------------for in   for of
// let list = [3, 4, 7];

// for (let i in list) { 
//   console.log(i); // "0", "1", "2"
// }

// for (let i of list) {
//   console.log(i); // "3", "4", "7"
// }

let tempObj = {a:9, b:4, c:7};

for(let [key, value] of Object.entries(tempObj)) {
  console.log(key, value);
}
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(anObj));