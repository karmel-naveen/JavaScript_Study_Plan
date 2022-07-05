sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
function cleanText(sentence) {
    let value = sentence;
    let newValue =value.replace(/[%&#;!?@$]/g,'');
    let arr = newValue.match(/[a-zA-Z]+/g);
    let set = new Set(arr);
    let counts = [];
    for (let value of set) {
        const filt = arr.filter((item) => value===item );
        counts.push({word : value,count : filt.length});
    };
    counts.sort((a,b)=> {
        if(a.count>b.count) return -1
        if (a.count<b.count) return 1
    })
    return counts.slice(0,3);
}
console.log(cleanText(sentence));