const chalk = require('chalk');
var moment = require('moment');

let now = moment();
let currentTime = now.format("dddd, MMMM Do YYYY, h:mm:ss a");
let dayOfYear = now.format("DDDo");
let secondsInDay = ((now.hours() * 60) * 60) + (now.minutes() * 60) + (now.seconds());
let daylightSavings = moment().isDST();
let leapYear = moment().isLeapYear();

if (daylightSavings === true) {
    daylightSavings = chalk.green("is");
} else {
    daylightSavings = chalk.red("is not");
}

if (leapYear === true) {
    leapYear = chalk.green("is");
} else {
    leapYear = chalk.red("is not");
}

console.log("It is " + chalk.blue(currentTime) + ".");
console.log("It is the " + chalk.magenta(dayOfYear) + " day of the year.");
console.log("It is " + chalk.green(secondsInDay) + " seconds into the day.");
console.log("It " + daylightSavings + " during Daylight Savings Time.");
console.log("It " + leapYear + " a leap year.");




