document.title = pageSettings.title;
document.getElementById('pageBanner').innerHTML = pageSettings.bannerText;
document.getElementById('subPageBanner').innerHTML = pageSettings.subBannerText;
document.getElementById('pageHeading').innerHTML = pageSettings.pageHeading;
document.getElementById('eventTitle').innerHTML = pageSettings.eventTitle;

setSlider()
toggleTheme()
function readSavedTheme() {
  theme = window.localStorage['theme'];
  if (theme == undefined) {
    window.localStorage['theme'] = 'dark';
    theme = 'dark'
  }
  return theme
}

function setSlider() {
  theme = readSavedTheme()
  if (theme == 'dark') {
    document.getElementById('slider').checked = true;
  } else {
    document.getElementById('slider').checked = false;
  }
}

function toggleThemeSlider() {
  theme = readSavedTheme()
  if (theme == 'dark') {
    window.localStorage['theme'] = 'light';
  } else {
    window.localStorage['theme'] = 'dark';
  }
  toggleTheme()
}

function toggleTheme() {
  theme = readSavedTheme();
  if (theme == 'dark') { //Set theme to dark
    document.body.style.backgroundColor = '#38373a';
    document.body.style.color = 'white';
  } else { //Set theme to light
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
}
