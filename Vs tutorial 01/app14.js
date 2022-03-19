//Это функция объявлена через фанкшин декларэйшин - всплывает (доступна в любом месте кода)
function sayHello(firstName = "Default", lastName = "Default") {
  // = "Defaut" поставили значение по умолчанию
    //if (!firstName) return console.error("Error"); // если в первом знакоместе имеем ложь то выводим ошибку в консоль

  console.log(firstName, lastName);
  console.log("Hello world");
  return `Hello ${firstName} ${lastName}`;
}

// let res = sayHello("Denis", "Mescheryakov");
// let res2 = sayHello("Dima", "Mescheryakov") + "!";
// let res3 = sayHello(null);
// console.log(res3);



// let x = 10;
// function foo(x) { //объявленные переменнные внутри функиции - объявляются локально только для функции
// x = 20;
//   console.log(x);
// }

// foo();
// console.log(x);

// const user = {
//   name: "Denis",
//   age: 30,
// };

// function getObj(obj) {

//   obj.name = "Den";
// }

// getObj(user);
// console.log(user);



//Это фанкшин экспрейшен
const square = function (x) {
  // не можем вызвать эту функцию до ее фактического присвоения в переменную (остальное - то же самое как и в фанкшин декларейшен)
  return x * x;
};


//Это самовызывающиеся функции (в их тело обычно помещается весь код, потому что все переменные, объявленные в ее теле, не будут видны для внешнего кода и не будет конфликта переменных (в случае повторного объявления) только для неё локально все переменные действуют, видны)
(function (msg) {
  console.log(msg);
  // const user = {
  //   name: "Denis",
  //   age: 30,
  // };

  // function getObj(obj) {

  //   obj.name = "Den";
  // }

  // getObj(user);
  // console.log(user);
})("Hello word22"); //либо после фигурных, либо после круглых добавляем круглые скобки (скобки вызова) в которых можно будет передать параметр(-ы)
