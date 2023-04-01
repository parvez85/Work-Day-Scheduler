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



