var prompt = require('prompt');
// Function call
prompt.start();
// 1
prompt.get(['month'], function (err, result) {
    // Printing the result
    let month = result.month.toLowerCase();
    switch (true) {
        case month == 'january'||month == 'march'||month == 'may'||month == 'july'||month == 'august'||month == 'october'||month == 'december':
            console.log(`${month} has 31 days.`);
            break;
        case month == 'february':
            console.log(`${month} has 28 days.`);
            break;
        case month == 'april'||month == 'june'||month == 'september'||month == 'november':
            console.log(`${month} has 30 days.`);
            break;
        default:
            console.log('Its not a month!');
    }
});
// 2
prompt.get(['month'], function (err, result) {
    // Printing the result
    let month = result.month.toLowerCase();
    switch (true) {
        case month == 'january'||month == 'march'||month == 'may'||month == 'july'||month == 'august'||month == 'october'||month == 'december':
            console.log(`${month} has 31 days.`);
            break;
        case month == 'february':
            console.log(`${month} has 29 days.`);
            break;
        case month == 'april'||month == 'june'||month == 'september'||month == 'november':
            console.log(`${month} has 30 days.`);
            break;
        default:
            console.log('Its not a month!');
    }
});