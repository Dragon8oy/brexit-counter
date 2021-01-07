today = new Date();
document.getElementById("eventDisplay").innerHTML = pageSettings.eventDateString.getDate() + '/' + pageSettings.eventDateString.getMonth() + 1 + '/' + pageSettings.eventDateString.getFullYear();

const oneHour = 1000*60*60;
const oneDay = 1000*60*60*24;
const oneWeek = 1000*60*60*24*7;

update()
setTimeout(update, 1000);
function update() {
  document.getElementById("todayDisplay").innerHTML = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
  calculateTime()
  displayTime()
  setTimeout(update, 1000);
}

function calculateTime() {
  today = new Date();
  timeDiff = today.getTime()-pageSettings.eventDateString.getTime();
  hoursAgo = Math.floor(timeDiff / oneHour);
  daysAgo = Math.floor(hoursAgo / 24);
  weeksAgo = Math.floor(daysAgo / 7);
  daysAgo = Math.floor(daysAgo - (weeksAgo * 7));
  hoursAgo = Math.floor((timeDiff / oneHour) - ((weeksAgo * 168) + (daysAgo * 24)));
}

function displayTime() {
  document.getElementById("hoursAgoHtml").innerHTML = hoursAgo;
  document.getElementById("daysAgoHtml").innerHTML = daysAgo;
  document.getElementById("weeksAgoHtml").innerHTML = weeksAgo;
}
