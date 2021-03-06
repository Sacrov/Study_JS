//Деструктиризация (деструктурировать можем объекты, массивы, и входные параметры функций если это объекты или массивы). Научимся вытягивать свойства из объекта, довать им какие-то собственные имена, и давать им значения по умолчанию

const user = {
  firstName: "Denis",
  lastName: "Mescheryakov",
  age: 25,
  info: {
    work: "EasyCode",
    skills: ["html", "css"],
  },
};

// const firstName = user.firstName;
// const lastName = user.lastName;

//-------------------------------------------------------------------------------------
// НИЖЕ ИДУТ СПОСОБЫ ДЕКОНСТРУРИРОВАНИЯ ОБЪЕКТОВ
// конструкция позволяющая деструктурировать выглядит следующим образом:
// const { firstName, lastName } = user;
// console.log(firstName, lastName); //возвратили из объекта конкретные значения

// -------------------------------------------------------------------------------------
// const { firstName, lastName, age = 30 } = user; // если нет значения в объекте, то прямо здесь мы можем его задать с дэфолтным значением "age = 30", если в объекте введен будет когда-то он (ключ и его значением), то в приоритете всегда будет информация из самого объекта
// console.log(age); //было заданно в "user" дэфолтное значение для "age" на случай если его не будет в изначальном объекте "user"

// -------------------------------------------------------------------------------------
// const { firstName: name, lastName, age: years = 30 } = user; //если ненравится имя свойства, то можно записать так как хочется, причем прошлое имя вызова уже не будет доступно в дальнейшем
// console.log(name);
// console.log(years);

// -------------------------------------------------------------------------------------
// ПРИНЦИП ДЕКОНСТРУРИРОВАНИЯ ВЛОЖЕННЫХ ОБЪЕКТОВ (ДЕКОНСТРУРИРОВАНИЕ)
// const { info: { work, skills } } = user;
// console.log(skills);

// -------------------------------------------------------------------------------------
// НИЖЕ ИДУТ СПОСОБЫ ДЕКОНСТРУРИРОВАНИЯ МАССИВОВ
const colors = ["white", "black", "red", "#89432d"];
// в массивах можно сразу задовать удобное имя, но главное следить за последовательностью (соблюдать порядок)
const [w, b, c, green = "green"] = colors; //аналогично задаётся значение по умолчанию
// console.log(w, b, c, green);

// -------------------------------------------------------------------------------------
// const names = ['Denis', 'Ivan', 'Maksim'];
// const [, , name3] = names; //при помощи запятых при деструктурировании пропускаем ненужные значения массива
// console.log(name3);

// -------------------------------------------------------------------------------------
// ПРИНЦИП ДЕКОНСТРУРИРОВАНИЯ ВЛОЖЕННЫХ МАССИВОВ (ДЕКОНСТРУРИРОВАНИЕ)
const nestedArr = ["hello word", ["key", "value"]];
const [, [k, v]] = nestedArr;
console.log(k, v); // получим наши значения: key value

// -------------------------------------------------------------------------------------
// Можно использовать ОПЕРАТОРЫ РЕСТ И СПРЕД. Первый для получения остатка и используется при копировании массмвов,
const names = ["Denis", "Ivan", "Maksim", "Misha", "Armen"];
const [name1, ...otherNames] = names; // при помощи такой приписки "...otherNames" можно не перечисляя забрать весь остаток и вывести
console.log(name1, otherNames); // получим строку: Denis (4) ['Ivan', 'Maksim', 'Misha', 'Armen']

//При его же поможи ""...otherNames" мы МОЖЕМ СКОПИРОВАТЬ МАССИВ. Но это не глубокое копирование (ОТ вложенных объектов и массивов буду копироваться в виде ссылки на них)
//const [...newNames] = names; //скопировали массив
const newNames = [...names]; // сделали то же самое но мы раставили точки перед массивом и он получается ракладывает каждый элемент в новый массив
console.log(...newNames); // если поставить три точки перед "newNames" значения массива будут переданы по очереди как отдельные элементы: Denis Ivan Maksim Misha Armen

// СПОСОБ СКЛЕИТЬ МАССИВЫ при помощи оператора спред (как бы сделать конкотонацию)
const colorNames = ["some value", ...colors, ...names]; // можем встраивать сразу новые значения напимер как "'some value'"
console.log(colorNames); //в консоле получим: (10) ['some value', 'white', 'black', 'red', '#89432d', 'Denis', 'Ivan', 'Maksim', 'Misha', 'Armen']

// КОПИРОВАНИЕ ОБЪЕКТОВ
// const newUser = { ...user };// получаем его копию, но помним что это поверхностное копирование, вложенный объект не копирован, "info" скопирован только ссылкой
// console.log(newUser);// получим: {firstName: 'Denis', lastName: 'Mescheryakov', age: 25, info: {…}}
const newUser = { ...user, age: 330 }; //можем сделать склейку (новое значение свойства заменит старое), только нужно соблюдать порядок: сначала идет объект который мы копируем "...user", потом свойство которое мы хотим изменить
console.log(newUser); // получим: {firstName: 'Denis', lastName: 'Mescheryakov', age: 330, info: {…}}

// СМЕШАННАЯ ДИСТРУКТОРИЗАЦИЯ (например хотим получить значение массива, который находится в объекте, который тоже находится в объекте)
const {
  info: {
    skills: [h, g], //сразу для наглядности использовал не дефолтные имена вызова
  },
} = newUser;
console.log(h, g); //в консоле получили наши значения: html css

// -------------------------------------------------------------------------------------
// В РАМКАХ ФУНКЦИЙ ДИСТРУКТОРИЗАЦИЯ И ОПЕРАТОРЫ РЕСПРЕД
// function myPerson({lastName = "$", firstName = "@"} = {}) { //срузу передали деструктурированные значения "lastName, firstName" и установили значение для функции по умолчанию "} = {})". Еще сделали для запришиваемых данных значения по умолчанию: lastName = "$", firstName = "@"
// console.log(lastName, firstName);// в консоли получили значения "undefined undefined" . Потому что не передали значение в функцию при её вызове. Или получим "$ @", если еще установим каждому запрашиваемуму значению ключа значение по умолчанию при условии что не передали при вызове функции наш объект.
// }
// myPerson()//можем сюда передовать так же копируя этот объект

//ДЕСТРУКТУРИРУЕМ ВЛОЖЕННЫЙ ОБЪЕКТ "info"
function myPerson({
  lastName = "$",
  firstName = "@",
  info: { skills } = {},
} = {}) {
  //задал по умолчанию пустую строку для ключа skills в info
  console.log(skills); //в консиле получил: (2) ['html', 'css']
}
myPerson(newUser); //в этот раз передал объект наш для функции

// -------------------------------------------------------------------------------------
//ПОЛУЧИТЬ ВСЕ АРГУМЕНТЫ ВНУТРИ ФУНКЦИИ при помощи ключевого специального слова arguments
// function foo(x, y) {
// console.log(arguments); //операторы рест спред позволяют нам превратить любую итеррируюмую коллекцию (аргументс в данном случае итеррируемая коллекция) в обычный массив
// console.log([].slice.call(arguments));//превратили коллекцию аргументс в обычный массив при помощи. .slice если в него не переданы аргументы - возвращает копию массива. .call(arguments) указывает в каком контексте мы хотим вызвать метод slice, а ставим slice перед пустым массивом для того что бы мы могли вызвать его (slice).
// const [...args] = arguments; // теперь у нас есть оператор рест и спред и нам хватит этого варианта реализации. Короче, понятнее, проще.
// console.log(args)
// }

// foo(1, 2);

function foo(x, y, ...others) {
  //мы можем использовать оператор рест для случая если передаются в функцию больше значений чем ожидалось но мы хотим их сохранить
  console.log(arguments);
  const [...args] = arguments;
  console.log(others); //по итогу мы получим только "[5, 6, 7]" . Что очень удобно
}
foo(1, 2, 5, 6, 7);

//БЫВАЕТ ЧТО МЫ ПОЛУЧАЕМ ДАННЫЕ В ВИДЕ МАССИВА И НАМ НУЖНО СДЕЛАТЬ. НЕ В ВИДЕ МАССИВА, У НАС ПРИНИМАЕТ ФУНКЦИЯ, А В ВИДЕ АРГУМЕНТОВ. т.е. не хотелось передовать массив0, массив1, массив2 и т.д.
const numbers = [2, 3];
function foo2(x, y) {
  console.log(x, y);
}
foo2(...numbers); //сдалав такую запись"...numbers" передоваемые числа из массива "numbers" автоматом распределятся по элементам нашей функции "function foo2(x, y) {" Т.Е. первый элемент попадет в "x", второй в "y" и так далее (сколько бы их не было)
