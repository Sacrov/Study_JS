const names = ["Denis", "Ivan", "Maks", "Olga"];

function mapArray(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]));
  }
  return res;
}

function nameLength(el) {
  // console.log(el);
  return el.length;
}
function nameToUpperCase(el) {
  return el.toUpperCase();
}

const result = mapArray(names, nameLength);
// console.log(result);
const result2 = mapArray(names, nameToUpperCase);
// console.log(result2);

//callback - это функции которые были переданы в качестве параметра и вызваны внутри функции высшего порядка

function greeting(firstName) {
  // с помощью одной функции вернули другую
  return function (lastName) {
    return `Hello, ${firstName} ${lastName}`;
  };
}

// const testGreeting = greeting("Denis"); // в результате этой записи в переменной будет находиться функция
// const fullName = testGreeting("Mescheryakov");
const fullName = greeting("Denis")("Mescheryakov"); // или так: вызываем функцию, она возвращает функцию и мы её срузу же вызываем

// console.log(fullName);

// function question(job) {
//   if (job === "developer") {
//     return function (name) {
//       return `${name}, что такое JavaScript?`;
//     };
//   } else if (job === "teacher") {
//     return function (name) {
//       return `${name}, какой предмет вы ведете?`;
//     };
//   }
// }

// Снизу упрощенное решение с помощь словаря (объекта jobDictionary) + легче расширять код и удобствоы
function question(job) {
  const jobDictionary = {
    developer: "что такое JavaScript",
    teacher: "какой предмет вы ведете",
  };
  return function (name) {
    return `${name}, ${jobDictionary[job]}?`;
  };
}
const developerQuestion = question("developer");
console.log(developerQuestion("Denis"));
const teacherQuestion = question("teacher");
console.log(teacherQuestion("Denis"));
