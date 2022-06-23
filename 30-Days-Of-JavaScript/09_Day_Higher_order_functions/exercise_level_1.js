const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
1
//forEach-iterates through a array params-element ,index,arr itself
//map-iterates through a array,modify the arr,and returns an array- params-element ,index,arr itself
//reduce takes a callback function,has accumualtor,current value,initial
//filter - filters a certain conditions and returns an array
2
//The function that is passed as a params to another function is called callback
3
//countries.forEach(country=>console.log(country));
4
//names.forEach(name=>console.log(name));
5
//numbers.forEach(num=>console.log(num));
6
//const UpperCaseCountry = countries.map((country)=>country.toUpperCase())
//console.log(UpperCaseCountry);
7
//const country_length = countries.map(country=>country.length);
//console.log(country_length);
8
//const squared_arr = numbers.map(n=>n**n)
//console.log(squared_arr);
9
//const UpperCaseNames = names.map((name)=>name.toUpperCase())
//console.log(UpperCaseNames);
10
//const prices = products.map(value=>value.price)
//console.log(prices)
11
const land = countries.filter(country=>country.includes('land'));
console.log(land);
12
const countries6=countries.filter(country=>country.length===6)
console.log(countries6);
13
const countries6_more =countries.filter(country=>country.length>=6);
console.log(countries6_more);
14
const country_E = countries.filter(country=>country.startsWith('E'));
15
const price2=products.filter(product=>product.price!=''&&product.price!=" ")
console.log(price2);
16
function getStringLists(arr) {
    const onlyStrings = arr.filter(val=>typeof val==='string')
    return onlyStrings
}
console.log(getStringLists([1,2,3,4,'Hello']));
17
const sum = numbers.reduce((sum,val)=>sum+=val);
console.log(sum);
18
const sentence = countries.reduce((sen,country)=>sen+','+country)
console.log(sentence+' are north European Countries');
19
//some- returns true if some elements match the conditions
//some- returns true if all elements match the conditions
20
const name_7 =names.some(name=>name.length>7);
console.log(name_7);
21
const name_land =names.every(name=>name.includes('land'));
console.log(name_land);
22
//find gives the first instance of the match
//findIndex gives the index value of the first match
23
console.log(countries.find(country=>country.length===6));
24
console.log(countries.findIndex(country=>country.length===6));
25
console.log(countries.findIndex(country=>country=='Norway'))
26
console.log(countries.findIndex(country=>country=='Russia'))



