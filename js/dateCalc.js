//Display the date of the event
today = new Date();
document.getElementById("eventDisplay").innerHTML = pageSettings.eventDateString.getDate() + '/' + pageSettings.eventDateString.getMonth() + 1 + '/' + pageSettings.eventDateString.getFullYear();

const oneHour = 1000*60*60;
const oneDay = 1000*60*60*24;
const oneWeek = 1000*60*60*24*7;

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
  timeDiff = today.getTime()-pageSettings.eventDateString.getTime();
  hoursAgo = Math.floor(timeDiff / oneHour);
  daysAgo = Math.floor(hoursAgo / 24);
  weeksAgo = Math.floor(daysAgo / 7);
  daysAgo = Math.floor(daysAgo - (weeksAgo * 7));
  hoursAgo = Math.floor((timeDiff / oneHour) - ((weeksAgo * 168) + (daysAgo * 24)));
}

//Display the calculated time diffs
function displayTime() {
  document.getElementById("hoursAgoHtml").innerHTML = hoursAgo;
  document.getElementById("daysAgoHtml").innerHTML = daysAgo;
  document.getElementById("weeksAgoHtml").innerHTML = weeksAgo;
}
