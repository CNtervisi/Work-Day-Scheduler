$(document).ready(function () {
// Current day and format
var currentDay = dayjs().format("dddd D MMMM YYYY");

// Update the #currentDay element with the formatted date
$("#currentDay").text(currentDay);
});
