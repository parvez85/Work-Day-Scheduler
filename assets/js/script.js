$(document).ready(function () {


  // global variables

  var timeBlock = [
    {
      label: "09:00 AM",
      tValue: "9",
      userInput: "",
    },
    {
      label: "10:00 AM",
      tValue: "10",
      userInput: "",
    },
    {
      label: "11:00 AM",
      tValue: "11",
      userInput: "",
    },
    {
      label: "12:00 PM",
      tValue: "12",
      userInput: "",
    },
    {
      label: "01:00 PM",
      tValue: "13",
      userInput: "",
    },
    {
      label: "02:00 pm",
      tValue: "14",
      userInput: "",
    },
    {
      label: "03:00 pm",
      tValue: "15",
      userInput: "",
    },
    {
      label: "04:00 PM",
      tValue: "16",
      userInput: "",
    },
    {
      label: "05:00 PM",
      tValue: "17",
      userInput: "",
    },
    // {
    //   label: "06:00 PM",
    //   tValue: "18",
    //   userInput: "",
    // },
  ]


  // functions

  // "display date & time" function
  
  var currentDay = moment().format('dddd, MMMM Do, YYYY');
  $("#currentDay").text(currentDay);

  // create rows and attach it to the container
 
  $(timeBlock).each(function (i) {
    var row = $("<div>");
    if (i < $(timeBlock).length) {
      row
        .addClass("row")
      $(".container").append(row);
    }
    i++
  });

  // create columns for  time-blocks and  append columns to rows

  $("div.row").each(function (i) {
    var timeValue = timeBlock[i].tValue;
    var labelCol = $("<div>");
    var inputCol = $("<div>");

    labelCol
      .addClass("col-2 hour")
      .text(timeBlock[i].label)
    inputCol
      .addClass("col-10 time-block")
      .attr("value", timeValue)
    $(this).append(labelCol);
    $(this).append(inputCol);
    i++
  });


  // connect timeblocks to current time
  
  $(".time-block").each(function (i) {
    var currentHour = parseInt(moment().format('H'));
    
    var timeId = $(this).attr("value");
    if (currentHour < timeId) {
      $(this).addClass("future");
    } else if (currentHour == timeId) {
      $(this).addClass("present");
    } else if (currentHour > timeId) {
      $(this).addClass("past");
    }
    i++
  })


  // create textareas for user input and append them to the container
  
  $(".time-block").each(function (i) {
    var saveCol = $("<button>");
    var timeValue = timeBlock[i].tValue;
    var inputDesc = $("<textarea>").text(timeBlock[i].userInput);
    inputDesc
      .addClass("description")
      .addClass("float-left")
      .attr("id", timeValue)
    saveCol
      .addClass("col-1 saveBtn float-right")
      .text("Save")
                                           
    $(this).append(inputDesc)
    $(this).append(saveCol);
    $(".description").show()
    i++
  });


  // saveBtn event listener

  $(".saveBtn").on("click", function () {
    var savedInput = $(this).siblings("textarea").val()
    var timeInput = $(this).parent().attr("value")
    localStorage.setItem(timeInput, savedInput);
  });


  // pull data from localStorage and populate to page
  for (let i = 9; i < 18; i++) {
    $(`#${i}`).val(localStorage.getItem(i));
  }
  
});