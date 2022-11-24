// variables for time amd arrays to be used later
var time = ''
var timeArray = [];
var allHours = $("#allHours");
var calendarEvent = [];

// create a for loop for time and push to calendar
for (let i = 5; i < 19; i++) {
    time = i
    timeArray.push(time);
}

//create a variable outside of for
var eventLog = {
    id: "",
    eventEl: ""}

//Using jquery to add all elements, classes and ids
for (let i = 0; i < timeArray.length; i++) {
    var divParent = $("<div>");
    var divChild = $("<div>");
    var textArea = $("<textarea>");
    var button = $("<button>");
    var iClass = $("<i>");
    
    allHours.append(divParent);
    divParent.append(divChild);
    divParent.append(textArea);
    divParent.append(button);
    button.append(iClass);
    
    divParent.addClass('row time-block')
    divChild.addClass('col-2 col-md-1 hour text-center py-3')
    textArea.addClass('col-8 col-md-10 test')
    button.addClass('btn saveBtn col-2 col-md-1')
    iClass.addClass('fas fa-save')
    textArea.attr('id',"description")
    divParent.attr('data-hour', i+5)
    
    // create an if statement to change the color of the boxes
    if (timeArray[i] == moment().format("HH")) {
        divParent.addClass("present")
    } else if (timeArray[i] < moment().format("HH")) {
        divParent.addClass("past")
    } else if (timeArray[i] > moment().format("HH")) {
        divParent.addClass("future")
    }
    //create button for saving
    button.attr('aria-label', "save")
    iClass.attr('aria-hidden', "true")
    textArea.attr('rows', '3')
    
// format the time correctly
    if (timeArray[i] == 12) {
        divChild.text(timeArray[i] + 'pm');
        
    } else if (timeArray[i] > 12) {
        divChild.text(timeArray[i] - 12 + 'pm');
        timeArray[i] = i - 7
    } else if (timeArray[i] < 12) {
        divChild.text(timeArray[i] + 'am');
        
    }
    
    var description = $('#description')
    textArea.attr("id", i)
    
    
//   global eventLog
    var eventLog = {
        id: i+5,
        eventEl: description.val()
        
    }
    //push eventLog into array 
    calendarEvent.push(eventLog)

    
}

// add currentDate
var currentDate = moment().format('dddd, MMMM Do');
function getCurrentDate() {
    $("#currentDay").text(currentDate);
    }


var saveBtn = $('.saveBtn');
//on click save the text written in the box to the eventEl
saveBtn.on('click', function(event) {
    event.preventDefault();
    var task = $(this).siblings("textarea").val();
    var timeSlotID = $(this).parent().data('hour');
    var index = calendarEvent.findIndex(function(obj){
        return obj.id === timeSlotID
    })
    var newEventLog = {
        id: timeSlotID,
        eventEl: task 
    }
    
    calendarEvent.splice(index,1,newEventLog)
    localStorage.setItem('entry',calendarEvent);
    const json = JSON.stringify(calendarEvent);
    localStorage.setItem('entry', json);


})




getCurrentDate()
