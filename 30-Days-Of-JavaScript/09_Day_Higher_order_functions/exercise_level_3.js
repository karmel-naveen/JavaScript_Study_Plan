const {countries} = require('./09_day_starter/data/countries_data');
1
//by name
countries.sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
});
//console.log(countries);
//by capital
countries.sort((a, b) => {
    if (a.capital < b.capital) return -1
    if (a.capital > b.capital) return 1
    return 0
});
//console.log(countries);
//by population
countries.sort((a, b) => {
    if (a.population < b.population) return -1
    if (a.population > b.population) return 1
    return 0
});
//console.log(countries);
2
let lang_arr=[]
countries.forEach(country=>(country.languages)
.forEach((lang)=> { 
    lang_arr.push(lang)
}));
//Counting number of occurences
const counts = {
};
lang_arr.forEach(function (x) { 
    counts[x] =(counts[x] || 0) + 1; });
//console.log(counts);
3
//by population
function mostPopulatedCountries(arr,num){
    arr.sort((a, b) => {
        if (a.population < b.population) return 1
        if (a.population > b.population) return -1
        return 0
    });
    return arr.slice(0,num);
}
//console.log(mostPopulatedCountries(countries,2));
4
//statistics
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const statistics = {
    count:function count(arr){
        return arr.length
    },
    sum:function sum(arr){
        return arr.reduce((sum,value)=>sum+value,0);
    },
    min:function min(arr){
        return Math.min(...arr);
    },
    max:function max(arr){
        return Math.max(...arr);
    },
    range:function range(arr){
        return Math.max(...arr)-Math.min(...arr);
    },
    mean:function max(arr){
        return this.sum(arr)/arr.length;
    },
    median:function median(values){
        if(values.length ===0) throw new Error("No inputs");
        values.sort(function(a,b){
            return a-b;
        });
        var half = Math.floor(values.length / 2);
        
        if (values.length % 2)
            return values[half];
        
        return (values[half - 1] + values[half]) / 2.0;
    },
}
console.log(statistics.count(ages));
console.log(statistics.sum(ages));
console.log(statistics.min(ages));
console.log(statistics.max(ages));
console.log(statistics.range(ages));
console.log(statistics.mean(ages));
console.log(statistics.median(ages));
//Skipping rest of the calculation, as in real word usage we may use External NPM pacakages.


