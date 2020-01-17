

$(".saveBtn").on("click", save);

function save() {
  var value = $(this)
    .siblings(".form")
    .val();




  var time = $(this)
    .siblings(".time")
    .text();



  localStorage.setItem(time, value);




};

// chaneg background color for each box base of local time
$(".row").each(function () {

  if (parseInt($(this).attr("id")) < moment().hours()) {

    $(this).addClass("red");
  }
  else if (parseInt($(this).attr("id")) === moment().hours()) {

    $(this).addClass("gray");


  }
  else {

    $(this).addClass("green");

  }

});


//   adding text to the app from local storage
$("#userInput-9").val(localStorage.getItem("9 AM"));
$("#userInput-10").val(localStorage.getItem("10 AM"));
$("#userInput-11").val(localStorage.getItem("11 AM"));
$("#userInput-12").val(localStorage.getItem("12 PM"));
$("#userInput-13").val(localStorage.getItem("1 PM"));
$("#userInput-14").val(localStorage.getItem("2 PM"));
$("#userInput-15").val(localStorage.getItem("3 PM"));
$("#userInput-16").val(localStorage.getItem("4 PM"));
$("#userInput-17").val(localStorage.getItem("5 PM"));

$("#local-time").html(moment().format('llll'));
  // console.log(moment());