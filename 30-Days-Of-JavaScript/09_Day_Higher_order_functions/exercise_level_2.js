const {countries} = require('./09_day_starter/data/countries_data')
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
1
const sum=products.map(item=>item.price)
.filter(value => typeof value =='number').reduce(((total,value)=>total+value))
//console.log(sum);
2
const sum_reduce = products.reduce((total,value)=> {
    let arr = []
    if(typeof value.price == 'number'){
        arr.push(value.price)
    };
    arr.reduce((sum,val)=> sum+val,0);
})
//console.log(sum_reduce);
3
//console.log(countries);
4
function categorizeCountries1() {
    return countries.filter((country)=>country.name.endsWith('land'));
}
//console.log(categorizeCountries1());
function categorizeCountries2() {
    return countries.filter((country)=>country.name.endsWith('ia'));
}
//console.log(categorizeCountries2());
function categorizeCountries3() {
    return countries.filter((country)=>country.name.endsWith('island'));
}
//console.log(categorizeCountries3());
function categorizeCountries4() {
    return countries.filter((country)=>country.name.endsWith('stan'));
}
//console.log(categorizeCountries4());
5
function getFirstTenCountries() {
    return countries.slice(0,11);
}
//console.log(getFirstTenCountries());
6
function getLastTenCountries() {
    return countries.slice(countries.length-10,countries.length);
}
//console.log(getLastTenCountries());
7
let value='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
function times() {
    let length_arr = []
    value.forEach(letter=>{
        //console.log(letter+'-',countries.filter((country)=>country.name.startsWith(letter)).length);
        length_arr.push(countries.filter((country)=>country.name.startsWith(letter)).length);
    })
    //console.log(Math.max(...length_arr));
    let index=length_arr.findIndex((value)=> value==Math.max(...length_arr))
    return value[index];
}
console.log(times());
