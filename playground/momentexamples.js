var moment = require('moment');

console.log(moment().format())

var now = moment();

console.log("Current Timestamp: ", now.unix());

var timestamp = 1484851170;
var currentMoment = moment.unix(timestamp);

console.log("Current Moment: ", currentMoment.format("MMM Do, YYYY @ h:mm a"));
