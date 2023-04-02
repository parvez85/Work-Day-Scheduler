//  global variables

var timeBlock = [
 {  
    label: "09:00 AM",
    tValue: "9",
    userinput: ""
  },
  {
    label: "10:00 AM",
    tValue: "10",
    userInput: "",
  },

  {  
    label: "11:00 AM",
    tValue: "11",
    userinput: ""
  },

  {  
    label: "12:00 PM",
    tValue: "12",
    userinput: ""
  },
  {  
    label: "01:00 PM",
    tValue: "13",
    userinput: ""
  },
  {  
    label: "14:00 PM",
    tValue: "14",
    userinput: ""
  },
  {  
    label: "15:00 PM",
    tValue: "15",
    userinput: ""
  },
  {  
    label: "16:00 PM",
    tValue: "16",
    userinput: ""
  }, {  
    label: "17:00 PM",
    tValue: "17",
    userinput: ""
  }, 
]
  console.log(timeBlock)

// adding function


// Date and tme function
var currentDay = moment().format("dddd, MMMM Do, YYYY ");
$("#currentDay").text(currentDay);


// create rows and attach it to the container

$(timeBlock).each(function(i) {
   var row = $("<div>");
   if (i< $(timeBlock).length) {
     row.addClass("row");
     $(".container").append(row);
   }
   i++
}); 


// create column for time block and append column to rows

$("div.row").each(function(i) {
  var timeValue = timeBlock[i].tValue;
  var labelCol   = $("<div>");
  var inputCol  = $("<div>");

  labelCol
      .addClass("col-2 hour")
      .text(timeBlock[i].label)
  inputCol
      .addClass("col-10 time-block")
      .attr("value", timeValue)
   $(this).append(labelCol)
   $(this).append(inputCol)   
    i++
})
    

    // create text area for user input and append it to the column
    
    $(".time-block").each(function(i) {
     var saveCol = $("<button>");
     var timeValue = timeBlock[i].tValue;
      var inputDesc = $("<textarea>").text(timeBlock[i].userinput);
      inputDesc
        .addClass("description")
        .addClass("float-left")
        .attr("id", timeValue)
        saveCol
         .addClass("col-1 saveBtn float-right")
         .text("Save")
       
         $(this).append(inputDesc)
        $(this).append(saveCol)
        $("description").show()
        i++
    }) 