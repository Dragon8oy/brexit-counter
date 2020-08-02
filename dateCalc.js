today = new Date();
document.getElementById("eventDisplay").innerHTML = pageSettings.eventDateString.getDate() + '/' + pageSettings.eventDateString.getMonth() + 1 + '/' + pageSettings.eventDateString.getFullYear();
document.getElementById("todayDisplay").innerHTML = today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear();

setTimeout(update, 1000);
function update() {
  document.getElementById("todayDisplay").innerHTML = today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear();
  calculateTime()
  displayTime()
  setTimeout(update, 1000);
}

oneHour = 1000*60*60;
oneDay = 1000*60*60*24;
oneWeek = 1000*60*60*24*7;

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
