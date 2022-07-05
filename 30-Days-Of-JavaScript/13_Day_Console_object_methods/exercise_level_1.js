const { countries } = require('./13_day_starter/data/countries_data');
1
let country_arr = [];
countries.forEach(({name,capital,languages,population,flag,currency})=>country_arr.push(name));
console.group('ARRAY');
console.table(country_arr);
console.groupEnd();
2
console.group('Object');
console.table(countries);
console.groupEnd();