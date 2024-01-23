$(document).ready(function () {
  // Current day and format
var currentDay = dayjs().format("dddd D MMMM YYYY");
var currentHour = dayjs().hour();

  // Update the #currentDay element with the formatted date
$("#currentDay").text(currentDay);

 // Function to update the time
function updateTime() {
    var currentTime = dayjs().format("hh:mm:ss A");
    $("#currentTime").text(currentTime);
}

 // Call the updateTime function every second
setInterval(updateTime, 1000);

$(".time-block").each(function () {
var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);

    if (timeBlockHour < currentHour) {
    $(this).addClass("past");
    } else if (timeBlockHour === currentHour) {
    $(this).addClass("present");
    } else {
    $(this).addClass("future");
    }

// Load saved events from local storage
    var timeBlockId = $(this).attr("id");
    var savedEvent = localStorage.getItem(timeBlockId);
    if (savedEvent !== null) {
    $(this).find(".description").val(savedEvent);
    }
});

// Add event listener to save buttons
$(".saveBtn").click(function () {
    var timeBlockId = $(this).parent().attr("id");
    var textAreaValue = $(this).prev(".description").val();
    localStorage.setItem(timeBlockId, textAreaValue);
});
});
