// Numbers
const num1 = 10;
const num2 = 20;
let value;

// + * / - %
value = num1 + num2;
value = value + 100;
value += 100;
value = 4;
// value = 5 % 2; //остаток от деления
value++;
value--;
++value;
--value;

value = 0.6 + 0.7;
// value = parseFloat(value.toFixed(1));
value = (0.6 * 10 + 0.7 * 10) / 10;

// Math
value = Math.PI; // свойства вызываются через точку без круглых скобок
value = Math.random(); // методы вызываются путем записи функции в свойствии объекта
value = Math.round(2.4); // окргугляет как в мат
value = Math.ceil(2.1); //округляет всегда в большую
value = Math.floor(2.9); // противополжность сеил
value = Math.min(2.4, 2, 11, 43, 1); //вернет мин число из списка

value = Math.floor(Math.random() * 10 + 1);
const arr = [
  "black",
  "red",
  "yellow",
  "pink",
  "white",
  "blue",
  "orange",
  "green",
];
value = Math.floor(Math.random() * arr.length);

console.log(value, arr[value]);
