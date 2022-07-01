const {countries} = require('./10_day_starter/data/countries_data');

1
let lang_arr = []
countries.forEach(country=>country.languages.forEach(value=>lang_arr.push(value)));
//console.log(lang_arr.length);
const lang_set = new Set(lang_arr);
console.log('No of languages - '+lang_set.size);
2

let counts = []

for (let lang of lang_set) {
    const filt = lang_arr.filter((value) => lang===value );
    //console.log(lang);
    counts.push({language : lang,count : filt.length});
}
counts.sort((a, b) => {
    if (a.count < b.count) return 1
    if (a.count > b.count) return -1
    return 0
});
//console.log(counts);
function mostSpokenLanguages(index) {
    return counts.slice(0,index)
}
console.log(mostSpokenLanguages(3));
console.log(mostSpokenLanguages(5));