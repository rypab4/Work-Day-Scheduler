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

    //Lines 102-237 should have a better way to write it.  Will rewrite once I learn how.
    calendarEvent.splice(index,1,newEventLog)
    const json0 = JSON.stringify(calendarEvent[0].eventEl);
    const json1 = JSON.stringify(calendarEvent[1].eventEl);
    const json2 = JSON.stringify(calendarEvent[2].eventEl);
    const json3 = JSON.stringify(calendarEvent[3].eventEl);
    const json4 = JSON.stringify(calendarEvent[4].eventEl);
    const json5 = JSON.stringify(calendarEvent[5].eventEl);
    const json6 = JSON.stringify(calendarEvent[6].eventEl);
    const json7 = JSON.stringify(calendarEvent[7].eventEl);
    const json8 = JSON.stringify(calendarEvent[8].eventEl);
    const json9 = JSON.stringify(calendarEvent[9].eventEl);
    const json10 = JSON.stringify(calendarEvent[10].eventEl);
    const json11 = JSON.stringify(calendarEvent[11].eventEl);
    const json12 = JSON.stringify(calendarEvent[12].eventEl);
    const json13 = JSON.stringify(calendarEvent[13].eventEl);
  
    
    localStorage.setItem('entry0', json0);
    localStorage.setItem('entry1', json1);
    localStorage.setItem('entry2', json2);
    localStorage.setItem('entry3', json3);
    localStorage.setItem('entry4', json4);
    localStorage.setItem('entry5', json5);
    localStorage.setItem('entry6', json6);
    localStorage.setItem('entry7', json7);
    localStorage.setItem('entry8', json8);
    localStorage.setItem('entry9', json9);
    localStorage.setItem('entry10', json10);
    localStorage.setItem('entry11', json11);
    localStorage.setItem('entry12', json12);
    localStorage.setItem('entry13', json13);
   

})

// need to use getItem to get answers after reloading
var getEntry0 = localStorage.getItem('entry0'); 
var getEntry1 = localStorage.getItem('entry1');
var getEntry2 = localStorage.getItem('entry2');
var getEntry3 = localStorage.getItem('entry3');
var getEntry4 = localStorage.getItem('entry4');
var getEntry5 = localStorage.getItem('entry5');
var getEntry6 = localStorage.getItem('entry6');
var getEntry7 = localStorage.getItem('entry7');
var getEntry8 = localStorage.getItem('entry8');
var getEntry9 = localStorage.getItem('entry9');
var getEntry10 = localStorage.getItem('entry10');
var getEntry11 = localStorage.getItem('entry11');
var getEntry12 = localStorage.getItem('entry12');
var getEntry13 = localStorage.getItem('entry13');

if (getEntry0 !== null){
    var getEntry0 = getEntry0.replace(/["]/g,'')
}else{ 
    var getEntry0 = ""
}
if (getEntry1 !== null){
    var getEntry1 = getEntry1.replace(/["]/g,'')
}else{ 
    var getEntry1 = ""
}
if (getEntry2 !== null){
    var getEntry2 = getEntry2.replace(/["]/g,'')
}else{ 
    var getEntry2 = ""
}
if (getEntry3 !== null){
    var getEntry3 = getEntry3.replace(/["]/g,'')
}else{ 
    var getEntry3 = ""
}
if (getEntry4 !== null){
    var getEntry4 = getEntry4.replace(/["]/g,'')
}else{ 
    var getEntry4 = ""
}
if (getEntry5 !== null){
    var getEntry5 = getEntry5.replace(/["]/g,'')
}else{ 
    var getEntry5 = ""
}
if (getEntry6 !== null){
    var getEntry6 = getEntry6.replace(/["]/g,'')
}else{ 
    var getEntry6 = ""
}
if (getEntry7 !== null){
    var getEntry7 = getEntry7.replace(/["]/g,'')
}else{ 
    var getEntry7 = ""
}
if (getEntry8 !== null){
    var getEntry8 = getEntry8.replace(/["]/g,'')
}else{ 
    var getEntry8 = ""
}
if (getEntry9 !== null){
    var getEntry9 = getEntry9.replace(/["]/g,'')
}else{ 
    var getEntry9 = ""
}
if (getEntry10 !== null){
    var getEntry10 = getEntry10.replace(/["]/g,'')
}else{ 
    var getEntry10 = ""
}
if (getEntry11 !== null){
    var getEntry11 = getEntry11.replace(/["]/g,'')
}else{ 
    var getEntry11 = ""
}if (getEntry12 !== null){
    var getEntry12 = getEntry12.replace(/["]/g,'')
}else{ 
    var getEntry12 = ""
}if (getEntry13 !== null){
    var getEntry13 = getEntry13.replace(/["]/g,'')
}else{ 
    var getEntry13 = ""
}
$('#0').val(getEntry0)
$('#1').val(getEntry1)
$('#2').val(getEntry2)
$('#3').val(getEntry3)
$('#4').val(getEntry4)
$('#5').val(getEntry5)
$('#6').val(getEntry6)
$('#7').val(getEntry7)
$('#8').val(getEntry8)
$('#9').val(getEntry9)
$('#10').val(getEntry10)
$('#11').val(getEntry11)
$('#12').val(getEntry12)
$('#13').val(getEntry13)

getCurrentDate()