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
