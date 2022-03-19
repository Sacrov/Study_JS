const firstName = "Denis";
const lastName = "Mescheryakov";
const age = 30;

let str;
str = "Hellou my name is " + firstName + ' ' + lastName;

str = '<ul>' +
      '<li>FirstName: ' + firstName + '</li>' +
      '<li>LastName: ' + lastName + '</li>' +
      '<li>Age: ' + age + '</li>' +
      '</ul>';


// console.log(str);

//ES6
str = `
<ul>
  <li>Fisrt name: ${firstName}</li>
  <li>Last name: ${lastName}</li>
  <li>Age: ${age}</li>
  <li>Fisrt: ${10+100}</li>
  <li>Math.random: ${Math.random}</li>
  <li> + 5: ${5 + 5}</li>


</ul>
`
document.body.innerHTML = str;
