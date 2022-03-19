// >, <, >=, <=, ==, ===, !=, !==

let value;

value = 1 > 2;
value = 1 <= 2;
value = 1 == "1";
value = 1 === "1";
value = 1 != "1";
value = 1 !== "1";

value = "a" > "ab"; // у символov есть числовое представление
// value = "A".charCodeAt();

// console.log(value);

// if (условие){
//   // action
// } else {
//   // ealse action
// }

// if (value === 10) {
//   console.log("value: 10");
// } else {
//   console.log("else");
// }

// value = null;
// // в булевом представлении расматривается переменная (ссылка на неё) в иф элс
// if (value) {
//   // Если есть value, то мы хотим сделать... .Если элс не ноль, не пусто, не андефайнед то она тру
//   console.log("some action24");
// } else {
//   console.log("else24", value);
// }

// || && !     т.е. ИЛИ, И, ЛОГИЧЕСКАЯ НЕ.
// value = NaN
// // console.log(!!value); // "!!" - это преобразование небулевого значения в булевое

// if (!value) {
//   console.log(value)
// }

// value = [1];

// if (value.length !== 0)  {//length проверит наличие длины массива. По умолчанию массив без ничего уже тру
//   console.log(value, 11);
// } else {
//   console.log("array is empty");
// }

// value = null;

// if (Array.isArray(value))  { // проверка масив или не массив
//   console.log(value, 11);
// } else {
//   console.log("array is empty");
// }

// let user = {
//   name: "Denis",
// };
// if (user.hasOwnProperty('name')) { //hasOwnProperty - проверяет есть ли объекта такое свойсто (не проверяет значени)
//   // if (user.name) - проверяем есть ли это поле внутри объекта
//   console.log(user.name);
// } else {
//   console.log("else12");
// }

// опер ИЛИ запинается на правде (кажд значен пытается преобраз к тру) возвращает первое же значение которое тру или самый последний фолс

//оператор И запинается на лжи (кажд значен пытается преобраз к фолсу) возвращает первое же значение которое фолс или самый последний тру

// value = 0 || 0 || NaN; //
// console.log(value);

// let age = 70;

// if (age < 16 || age > 65) {
//   console.log("some action");
// } else {
//   console.log("stop");
// }

// let serverNickname = "PPK";
// let nickname = serverNickname || "defaul nickname "; // в случае если пользователь не заполнит поле Имени например (Использование ИЛИ)

// console.log(nickname);

// value = 7 && 1 && 3;

// productPrice = 14;
// if (productPrice >= 5 && productPrice <= 20) {
//   console.log("беру");
// } else {
//   console.log("fuck your money");
// }

// console.log(value);

value = 10;

if (value < 10) {
  console.log("value < 10", value);
} else if (value >= 10) {
  console.log("value >= 10", value);
} else {
  console.log("else");
}

