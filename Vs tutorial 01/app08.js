const firstName = "Denis";
const lastName = "Mescheryakov";
const age = 30;
const str = "Hello my name is Denis";

let value;

// конкотонация (сложени например строк)
value = firstName + " " + lastName;
// value = value + ' I am ' + age;
value += " I am " + age;
value = firstName.length; // воз длин строки
value = firstName[2];
// свойства и методы присущи объектам
value = firstName[4];
value = lastName[lastName.length - 1]; // 11 simvolov max length schitaet

value = firstName.toLocaleUpperCase();
value = firstName.concat(" ", lastName); // concataniruem vse cherez zapituyu

value = str.indexOf("n", 10);
value = str.indexOf("my"); // поиски символа, строки (первого) (чувств к регистру)
value = str.includes("DENIS"); //есть ли это там - тру или фолс (чувств к регистру)

value = str.slice(0,5); // вырезает -  начальный индекс, конечный
value = str.slice(0, -3); // вырезает -  начальный индекс, конечный

value = str.replace('Denis', 'Den'); // возвращает + находит и заменяет на указанное


console.log(value);
