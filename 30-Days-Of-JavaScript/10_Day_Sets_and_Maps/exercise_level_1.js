1
const a = new Set()
2
for(let i=1;i<=10;i++) {
    a.add(i);
};
console.log(a);
3
a.delete(7);
console.log(a);
4
a.clear();
5
let arr = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
    'Tamil',
    'Hindi',
    'Italian',
    'Japanese'
]
const lang_set = new Set(arr);
console.log(lang_set);
6
countries = [
    ['Finland', 'Finland'.length],
    ['Sweden', 'Sweden'.length],
    ['Norway', 'Norway'.length],
    ['India', 'India'.length],
    ['USA', 'USA'.length],
]
const map = new Map(countries)
console.log(map);

