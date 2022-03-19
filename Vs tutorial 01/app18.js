const plus = (x = 0, y = 0) => x + y;
// она равносильна следующему
// function plusFoo(x, y) {
//   return x + y;
// }
const plusRes = plus(1, 2);
// console.log(plusRes);

const withoutArge = () => console.log("Helo world");
const singleArg = (x) => x * 2;

const moreAction = (a, b) => {
  a *= 2;
  b *= 3;
  return a + b;
};

const returnObj = (str = "") => ({
  value: str,
  length: str.length,
});

function plusFoo(x, y) {
  console.log(arguments); // вызвали псевдомассив из специальной коллекции arguments, в стрелочной функции он не работает
  return x + y;
}

// plusFoo(1, 2, 3, "hiha");

const obj = {
  firstName: "Denis",
  age: 30,
  getFirstName() {
    console.log(this);
  },
  getAgeArrow: null,
  getAge() {
    // this.getAgeArrow = () => console.log(this);
    setTimeout(() => console.log(this));
  },
};
obj.getAge();
// obj.getAgeArrow();