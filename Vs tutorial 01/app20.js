let obj1 = {
  name: "Denis",
  info: {
    skills: ["html", "css"],
  },
};

let obj2 = {
  name: "Ivan",
  age: 20,
};

// ----------------------------------------------------------------
//ПОВЕРХНОСТНОЕ КОПИРОВАНИЕ - с помощью метода assign (ИСПОЛЬЗУЕТСЯ ДЛЯ КОПИРОВАНИЯ И/ИЛИ СОВМЕЩЕНИЯ ОБЪЕКТОВ) копирует из одного объекта(тов) по ссылке. Т.е. манипулируя инфой из новоскопированного объекта, будем одновременно изменять исходный(первоначальный) объект.

let newObj = Object.assign({}, obj1, obj2); // у объекта Object вызываем методы
// let newObj = Object.assign(obj1, obj2); //тут newObj ссылается на obj1, поэтому они всегда будут равны
// console.log(newObj === obj1);
// console.log(newObj);

// newObj = Object.assign({}, obj1);
// console.log(newObj);
// console.log(newObj.info === obj1.info);//если есть вложенные объекты то они копируются по ссылке (изменяя newObj.info произойдут изменения соответсвенно и в obj1.info)

// ----------------------------------------------------------------
//ГЛУБОКОЕ КОПИРОВАНИЕ (с помощью специального объекта JSON и вызываем у него методы stringify и parse ). Сперва превращаем инфу из объекта в формат JSON, потом разпарсиваем его: профит в виде скопированного глубокого нового объекта который не будет взаимнозависим с исходным (первоначальным) объектом (т.е. получим полностью новый объект).

//метод stringify всю инфо вернет в виде строки
// console.log(JSON.stringify(obj1));

// let objJson = JSON.stringify(obj1); //взяли инфо из объекта в специальную строку (в током формате обычно отправляют на сервер)
// console.log(objJson);
// newObj = JSON.parse(objJson); // при помощи метода parse сервер  может полученную инфу, в виде строки, вернуть в первосданный вид (т.е. в объект)
newObj = JSON.parse(JSON.stringify(obj1)); // чтобы не создовать новую переменную сразу помещаем метод stringify в поле парсинга newObj = JSON.parse();
// console.log(newObj.info === obj1.info);
// console.log(newObj);

// ---------------------------------------------------------
// МЕТОДЫ Object.keys и Object.values  - первый вернет ключи объекта в виде массива, а второй его значения в виде массива

let keys = Object.keys(obj2); // сразу можно через точку вызывать методы массива  т.к. "Object.keys(obj2)" является уже массивом
console.log(keys);

let values = Object.values(obj2);
console.log(values);

// МЕТОДЫ Object.entries и Object.fromEntries - первый возвращает из объекта массив массивов, сотстоящие из пар: ключ и его значение. Второй из массива массивов переводит инфу в объект
let entries = Object.entries(obj2);
console.log(entries);

let fromEntries = Object.fromEntries([
  ["a", 84],
  ["b", 1222],
  ["c", "Opps"],
]);
console.log(fromEntries);
