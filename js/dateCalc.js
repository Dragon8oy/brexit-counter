//Display the date of the event
today = new Date();
document.getElementById("eventDisplay").innerHTML = pageSettings.eventDateString.getDate() + '/' + pageSettings.eventDateString.getMonth() + 1 + '/' + pageSettings.eventDateString.getFullYear();

const oneHour = 1000 * 60 * 60;
const oneDay = oneHour * 24;
const oneWeek = oneDay * 7;
//const oneYear = oneWeek * 52

//Timer to refresh dates every 1 second
update()
setInterval(update, 1000);

//Function to calculate and display information
function update() {
  document.getElementById("todayDisplay").innerHTML = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
  calculateTime()
  displayTime()
}

//Work out how long since event passed
function calculateTime() {
  today = new Date();
  timeDiff = today.getTime() - pageSettings.eventDateString.getTime();

  //Work out years ago
  hoursAgo = Math.floor(timeDiff / oneHour);
  daysAgo = Math.floor(hoursAgo / 24);
  weeksAgo = Math.floor(daysAgo / 7);
  yearsAgo = Math.floor(weeksAgo / 52)

  //Refine weeks ago
  weeksAgo = Math.floor(weeksAgo - (yearsAgo * 52))

  //Refine days ago
  daysAgo = Math.floor(daysAgo - (((yearsAgo * 52) + weeksAgo) * 7));

  //Refine hours ago
  hoursAgo = Math.floor((timeDiff / oneHour) - ((((yearsAgo * 52) + weeksAgo) * 7) + daysAgo) * 24);
}

//Display the calculated time diffs
function displayTime() {
  //If yearsAgo is 0, hide the element
  if (yearsAgo == 0) {
    document.getElementById("yearsAgoHtmlTitle").style.display = "none"
    document.getElementById("yearsAgoHtml").style.display = "none"
  }
  document.getElementById("hoursAgoHtml").innerHTML = hoursAgo;
  document.getElementById("daysAgoHtml").innerHTML = daysAgo;
  document.getElementById("weeksAgoHtml").innerHTML = weeksAgo;
  document.getElementById("yearsAgoHtml").innerHTML = yearsAgo;
}
