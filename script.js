// make sure js file is linked
// console.log("this is js");
// console.log("moment",moment().hours());


$(".saveBtn").on("click", save);

function save() {
  var value = $(this)
    .siblings(".form")
    .val();
  // console.log(value);

  

  var time = $(this)
    .siblings(".time")
    .text();
  // console.log(time);

  
  localStorage.setItem(time,value);
  

  
  
};

// chaneg background color for each box base of local time
$(".row").each(function(){
    // console.log("each row",$(this).attr("id"));
    if(parseInt($(this).attr("id")) < moment().hours()){
      // console.log(" Time Past",$(this).attr("id"));
      $(this).addClass("red");
    }
    else if(parseInt($(this).attr("id")) === moment().hours()){
      // console.log(" Corrent Time",$(this).attr("id"));
      $(this).addClass("gray");
  
  
    }
    else {
      // console.log("future Time",$(this).attr("id"));
      $(this).addClass("green");
  
    }
  
  });
  // console.log("local storage 9am",localStorage.getItem("9 AM"));

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
  
  $("#local-time").html(moment().format( 'llll'));
  // console.log(moment());