var saveButton = $(".saveBtn");

var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY, h:mm:ss a"));

var currentHour = Number(currentDay.format('H'));





setInterval (function()  {
    currentDay = moment();
    $("#curentDay").text(currentDay.format("dddd, MMMM Do YYYY"));


}, 1000);








