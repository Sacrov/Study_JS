const div = document.querySelector("div");
const titles = document.querySelectorAll("h1");
const h1 = document.getElementsByTagName("h1");

// console.dir(h1);
// console.log(titles);

// console.dir(Array.from(titles));
// console.log(Array.prototype.slice.call(titles))
// console.log([...titles ])

// console.log(div.parentElement); // через свойство .parentElement (.parentNode) можно получить родительский элемент этого дива

// -------------------------------------------------------------------
const link = div.querySelector(".link");
// Два простых решения как получить родителя
// .parentElement возвращает ппямого родителя, а .closest возвращает ближайшего родетеля с указанным селектором (т.е. это может быть на уровень выше, оберточный элемента)
// console.log(link.parentElement);
// console.log(link.closest('.content'));
// -------------------------------------------------------------------

div.classList.add("article", "custom"); //добавил еще несколько классов в див
div.classList.remove("article"); //удалил (убрал) конкретный класс из дива
// div.classList.contains('custom'); // вернет тру если такой класс есть
// div.classList.toggle('toggle'); //если нет указанного класса то он добавится и высветится тру, если он был то он удалится и высветится фолс.
// console.log(div.classList); //выдаст все имеющиеся в диве классы
// console.dir(link);
div.setAttribute("id", "myId"); // так можно добавить для тега id c его именем
// div.classList.contains('custom');//узнать имя id
//  div.hasAttribute("id") // проверка наличия атрибута, вернет тру или фолс
// div.removeAttribute("id") //удалил элемент id

// div.dataset.myattr

// *Манипуляция DOM
const title = document.querySelector("h1");
// title.innerHTML = '<span>text</span>';
// title.textContent = "<span>new text</span>";
// title.appendChild('<span>appen</span>');
// title.insertAdjacentHTML("beforebegin", '<h2>title h2</h2>')
// title.insertAdjacentElement

// title.innerHTML += '<span>new text</span>';
// const span = title.querySelector('span');
// console.log(span);
// title.innerHTML += '<span>new text2</span>';//innerHTML небезопасен потому что он удаляет все существующие объекты внутри элемента для которого мы применили innerHTML и мы теряем на них ссылки.
// span.textContent = 'asdasd';

// *Создание элемента
const span = document.createElement("span"); //создали тег (который еще не добавился в HTML и находится внутри JS)
span.textContent = "span created by createElement"; //ввел текстовое содержимое
span.classList.add("myClass"); //добавил ему класс
console.log(span);
title.appendChild(span); //добавил его в разметку HTML
// div.appendChild(span); // дом узлы могут быть только в одном экземпляре .Поэтому при объявлении его внутри тэга див - он удалился из тега h1

const fragment = document.createDocumentFragment();
const colors = ["black", "yellow", "orange"];
colors.forEach((color) => {
  const item = document.createElement("div");
  item.classList.add(`bg-${color}`);
  item.style.background = color;
  item.textContent = color;
  fragment.appendChild(item);
});
document.body.appendChild(fragment);
// console.log(fragment);

// *Удаление элементов
// title.remove()
// title.parentElement.removeChild(title)
