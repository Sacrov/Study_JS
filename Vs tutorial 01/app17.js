function getThis() {
  console.log(this);
}
// getThis();
// window.getThis();
// console.log(window.getThis);

function getPrice(currency = '$') {
  console.log(currency + this.price);
  return this;
}

function getName() {
  console.log(this.name);
  return this;
}
const prod1 = {
  name: "Intel",
  price: 100,
  getPrice, //новенькое из синтаксиса сокращение от "getPrice: getPrice",
  getName() {
    //объявление метода в новом формате. т.е. это фунция
    console.log(this.name);
  },
  info: {
    information: ["2.3ghz"],
    getInfo: function () {
      console.log(this);
    },
  },
};
// prod1.getPrice(); // This будет равен тому что находится перед самой крайней точкой (в нашем случае это будет"prod1")
// prod1.info.getInfo();
// prod1.getName();
const prod2 = {
  name: "AMD",
  price: 50,
  getPrice,
};

prod2.getName = prod1.getName; //передали возможность вызова функции getName для объекта prod2
// prod2.getPrice();

// prod2.getName();

let str = "Hello world";
const reversStr = str //тут мы сделали цепочку вызовов методов
  //далее вызвали для примера три метода, это называется "Вызов методов цепочки"
  .split("") //методом разбили строку на массив
  .reverse() //при помощи этого метода перевернули
  .join(""); //этим методом склеили обратно в строку
// console.log(reversStr);

const prod3 = {
  name: "ARM",
  price: 200,
  getPrice,
  // getName,
};

// getPrice.call(prod3, '*');// с помощью метода колл указываем в каком контексте мы хотим вызвать функцию
// getPrice.apply(prod3, ['*']);




// prod3
//   .getName() // когда мы не пишем явно ретерн, функция возвращает undefined
//   .getPrice(); // на этом этапе мы пытаемся вызвать у ubndefined метод getPrice(), что не может быть произведено. Что бы этого не происходило нужно прописать возврат в каждой функции return this; .
// // как тоько пропишем return this для наших функций, getName() вернет prod3, a getPrice() вернет prod3.getPrice().
const getPriceBind = prod3.getPrice.bind(prod3, '*');
console.log(getPriceBind)
setTimeout(getPriceBind, 1000);