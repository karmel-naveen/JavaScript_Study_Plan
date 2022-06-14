//Skipping first one
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
let txt=text.replace(regex,'');
console.log(txt.split(' '));
console.log(txt.split(' ').length);
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
shoppingCart[shoppingCart.indexOf('Tea')]='Green Tea';
shoppingCart.splice(shoppingCart.indexOf('Honey'),1)
console.log(shoppingCart);
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
if(countries.includes('Ethiopia')){
    console.log('ETHIOPIA');
}else{
    countries.push('Ethiopia')
}
console.log(countries);
if(webTechs.includes('Sass')){
    console.log('Sass is a CSS preprocess');
}else{
    webTechs.push('Sass')
}
console.log(webTechs);
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack =frontEnd.concat(backEnd);
console.log(fullStack);
