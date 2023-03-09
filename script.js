// Function to display the date
function displayDate() 
{
    // html element
    const dateDisplay = document.getElementById("displayDate");

    // Creating Date obj and storing time in variable
    const d = new Date();

    // getting the date, day, weekName, and Year
    let day = d.getDate();

    let month = d.getMonth();

    let weekName = d.getDay();

    weekName = convertDay(weekName);

    month = convertMonth(month);

    let year = d.getFullYear();

    let todaysDate = weekName + ",\r\n" + month + ' ' + day;
    
    // storing in html element
    dateDisplay.textContent = todaysDate;
    
}

// Function to display the time
function displayTime(){
    // html element
    const timeDisplay = document.getElementById("displayTime");

    // Creating Date obj
    const d = new Date();

    // Formatting time as  string
    let timeAsString = d.toLocaleTimeString();

    // storing in html element
    timeDisplay.textContent = timeAsString;
    
}

// calling each functiton every second
setInterval(displayTime, 1000);
setInterval(displayDate, 1000)


// Function to convert num day to Word Day of Week
function convertDay(day){
    const dayList = ["Sunday", "Monday",
                    "Tuesday","Wednesday",
                    "Thursday","Friday","Saturday"];

    if (day = 0){
        day = dayList[day]; 
    } else if (day = 1){
        day = dayList[day];
    } else if (day = 2){
        day = dayList[day];
    } else if (day = 3){
        day = dayList[day];
    } else if (day = 4){
        day = dayList[day];
    } else if (day = 5){
        day = dayList[day];
    } else {
        day = dayList[day];
    }

    return day;
}

// Function to convert month num to month Name
function convertMonth(month){
    if (month = 0){
        month = "January";
    } else if (month = 1){
        month = "February";
    } else if (month = 2){
        month = "March";
    } else if (month = 3){
        month = "April";
    } else if (month = 4){
        month = "May";
    } else if (month = 5){
        month = "June";
    } else if (month = 6){
        month = "July";
    } else if (month = 7){
        month = "August";
    } else if (month = 8){
        month = "September";
    } else if (month = 9){
        month = "October";
    } else if (month = 10){
        month = "November";
    } else{
        month = "December";
    }
    return month;
}