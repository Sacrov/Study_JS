//Научимся добавлять события, познакомися с объектом события в кратце, Узнаем чем отличается this в стрелочной и обычной функции для события, Познакомились с возможностью отслеживания событий на динамически добавленных элементах при этом каждый раз не навешивая на них отдельные события

const btn = document.querySelector("button");
const link = document.querySelector("a");
// console.dir(btn);

// Этот способ обычно не используют, так как на него нельзя повесить несколько одновременных событый - будет активно самое крайнее (выводится только click 2)
// btn.onclick = function() {
//   console.log('click');
// };

// btn.onclick = function() {
//   console.log('click 2');
// };
// --------------------------------------------------------

// addEventListener это универсальный обработчи события, повесить сразу несколько обработчиков
// btn.addEventListener("click", function (e) { //тип события,второе это обработчик события, третий аргумент - объект с определенными настройками
//   console.log(e);
// });

// btn.addEventListener("click", function () {
//   console.log("click33");
// });

// link.addEventListener("click", function (e) {
//   e.preventDefault();//этот метод нужен для того чтобы страница не перезагружалась - сможем видеть выведенную строку в консоль
//   console.log("click");
// });

// // --------------------------------------------------------
// btn.addEventListener("click", (e) => {
//   console.log(this);

//   console.log(e);
// });

// function clickhandler(e) {
//   console.log(this);

//   e.preventDefault();
//   console.log("click");
// }

// link.addEventListener("click", clickhandler); //аргументы: тип события, названия обработчика события

// link.removeEventListener("click", clickhandler);

// -----------------------------------------------------

const container = document.querySelector(".container"); // получили див из разметки

btn.addEventListener("click", (e) => {
  const div = document.createElement("div");
  const nestedBtn = document.createElement("button");
  div.textContent = Math.random();
  nestedBtn.textContent = "button";
  div.appendChild(nestedBtn);
  container.appendChild(div);
});

container.addEventListener("click", (e) => {
  console.dir(e.target);
  if (e.target.tagName === "BUTTON") {
    console.log("button clicked");
  }
});
