var prompt = require('prompt');
// Function call
prompt.start();
// 1
prompt.get(['mark'], function (err, result) {
    // Printing the result
    let num = parseInt(result.mark);
    switch (true) {
        case num >= 80:
            console.log('Grade : A');
            break;
        case num >= 70:
            console.log('Grade : A');
            break;
        case num >= 60:
            console.log('Grade : A');
            break;
        case num >= 50:
            console.log('Grade : A');
            break;
        default:
            console.log('Grade : F');
    }
});
// 2
prompt.get(['month'], function (err, result) {
    // Printing the result
    let month =result.month.toLowerCase()
    switch (true) {
        case month == 'september'||month == 'october'||month == 'november':
            console.log('Autumn');
            break;
        case month == 'december'||month == 'january'||month == 'february':
            console.log('Winter');
            break;
        case month == 'march'||month == 'april'||month == 'may':
            console.log('Spring');
            break;
        case month == 'june'||month == 'july'||month == 'august':
            console.log('Summer');
            break;
        default:
            console.log('Its not a month!');
    }
});
// 3
prompt.get(['day'], function (err, result) {
    // Printing the result
    let day =result.day.toLowerCase();
    switch (true) {
        case day == 'sunday'||day == 'saturday':
            console.log( `${day} is a weekend.`);
            break;
        case day == 'monday'||day == 'tuesday'||day == 'wednesday'||day=='thursday'||day=='friday':
            console.log(`${day} is a working day.`);
            break;
        default:
            console.log('Its not a day in week!');
    }
});

