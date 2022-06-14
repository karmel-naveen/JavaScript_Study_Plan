let arr = Array();
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
console.log(webTechs.length);
console.log(webTechs[0]);
console.log(webTechs[3]);
console.log(webTechs[webTechs.length-1]);
const mixedDataTypes = [1,'Two',3,true,{
    name:'karmel',
    role:'Developer'
},[1,2,3,4]];
console.log(mixedDataTypes.length);
const itCompanies =['Facebook','Google', 'Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[itCompanies.length-1]);
itCompanies.forEach(company=>console.log(company));
itCompanies.forEach(company=>console.log(company.toUpperCase()));
console.log(itCompanies.toString()+' are big IT companies');
let check=itCompanies.indexOf('Facebook');
check ==-1?console.log('Not Found'):console.log(itCompanies[check]);
for (let i=0;i<itCompanies.length;i++){
    console.log(itCompanies[i]);
    if (itCompanies[i].includes('oo')) {
        itCompanies.splice(itCompanies.indexOf(itCompanies[i]),1);
        i--
    };
}
console.log(itCompanies);
console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0,3));
console.log(itCompanies.slice(-4,itCompanies.length-1));
console.log(itCompanies.splice(parseInt(itCompanies.length/2),1));
itCompanies.shift();
console.log(itCompanies);
console.log(itCompanies.splice(parseInt(itCompanies.length/2),1));
itCompanies.pop();
console.log(itCompanies);
itCompanies.splice(0,itCompanies.length);
console.log(itCompanies);





