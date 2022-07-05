paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
function tenMostFrequentWords(sentence,count) {
    let value = sentence;
    let arr = value.match(/[a-zA-Z]+/g);
    let set = new Set(arr);
    let counts = [];
    for (let value of set) {
        const filt = arr.filter((item) => value===item );
        counts.push({word : value,count : filt.length});
    };
    counts.sort((a,b)=>{
        if(a.count>b.count) return -1
        if (a.count<b.count) return 1
    })
    return counts.slice(0,count);
};
console.log(tenMostFrequentWords(paragraph,2));
console.log(tenMostFrequentWords(paragraph,5));