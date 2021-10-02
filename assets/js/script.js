var saveButton = $(".saveBtn");

var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY, h:mm:ss a"));

var currentHour = Number(currentDay.format('H'));





setInterval (function()  {
    currentDay = moment();
    $("#curentDay").text(currentDay.format("dddd, MMMM Do YYYY"));


}, 1000);








if(currentHour === 9) {
    $("#0").addClass("present");
} else if(currentHour> 9) {
    $("#0").addClass("past");
};

if(currentHour === 10) {
    $('#1').addClass("present");
} else if(currentHour > 10) {
    $('#1').addClass("past");
};

if(currentHour === 11) {
    $('#2').addClass("present");
} else if(currentHour > 11) {
    $('#2').addClass("past");
};

if(currentHour === 12) {
    $('#3').addClass("present");
} else if(currentHour > 12) {
    $('#3').addClass("past");
};

if(currentHour === 13) {
    $('#4').addClass("present");
} else if(currentHour > 13) {
    $('#4').addClass("past");
};

if(currentHour === 14) {
    $('#5').addClass("present");
} else if(currentHour > 14) {
    $('#5').addClass("past");
};

if(currentHour === 15) {
    $('#6').addClass("present");
} else if(currentHour > 15) {
    $('#6').addClass("past");
};

if(currentHour === 16) {
    $('#7').addClass("present");
} else if(currentHour > 16) {
    $('#7').addClass("past");
};

if(currentHour === 17) {
    $('#8').addClass("present");
} else if(currentHour > 17) {
    $('#8').addClass("past");
};














saveButton.saveButton("click", function() {

    console.log($(this).parent().previousSibling);
});


