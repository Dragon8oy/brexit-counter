//Setup page from settings
document.title = pageSettings.title;
document.getElementById('pageBanner').innerHTML = pageSettings.bannerText;
document.getElementById('subPageBanner').innerHTML = pageSettings.subBannerText;
document.getElementById('pageHeading').innerHTML = pageSettings.pageHeading;
document.getElementById('eventTitle').innerHTML = pageSettings.eventTitle;

//Restore saved theme
setSlider()
loadTheme()

function readSavedTheme() {
  let theme = window.localStorage['theme'];
  if (theme == undefined) {
    window.localStorage['theme'] = 'dark';
    theme = 'dark'
  }
  return theme
}

function setSlider() {
  let theme = readSavedTheme()
  if (theme == 'dark') {
    document.getElementById('themeSlider').checked = true;
  } else {
    document.getElementById('themeSlider').checked = false;
  }
}

function toggleTheme() {
  let theme = readSavedTheme()
  if (theme == 'dark') {
    window.localStorage['theme'] = 'light';
  } else {
    window.localStorage['theme'] = 'dark';
  }
  loadTheme()
}

function loadTheme() {
  let theme = readSavedTheme();
  if (theme == 'dark') { //Set theme to dark
    document.body.style.backgroundColor = pageSettings.darkTheme.backgroundColour;
    document.body.style.color = pageSettings.darkTheme.textColour;
  } else { //Set theme to light
    document.body.style.backgroundColor = pageSettings.lightTheme.backgroundColour;
    document.body.style.color = pageSettings.lightTheme.textColour;
  }
}
