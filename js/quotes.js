//Return a list of quotes (fallback - whether or not the URL is a fallback (internal))
function getQuoteList(fallback, quoteFileUrl) {
  if (fallback == false) {
    quoteFileUrl = window.location.href.replace("index.html", "") + 'assets/quotes.txt'
  }
  var file = new XMLHttpRequest();
  file.open("GET", quoteFileUrl, true);
  file.onreadystatechange = function() {
    if (file.readyState === 4) {
      if (file.status === 200) {
        text = file.responseText;
        quotes = text.split("\n")
        quotes.pop()
        return quotes
      } else {
        if (fallback == false) {
          console.log("Failed to get quote file from current URL, trying fallback")
          getQuoteList(true, pageSettings.fallbackQuoteFile);
        } else {
          console.log("Fallback URL failed")
        }
      }
    }
  }
  file.send(null);
}

//Pick a random quote, display it and start a timer to hide it
function showQuote(targetSprite, quotes) {
  document.getElementById(targetSprite + 'Quote').classList.toggle('fade');
  document.getElementById(targetSprite + 'QuoteText').textContent = quotes[Math.floor(Math.random() * quotes.length)];
  setTimeout(function () {document.getElementById(targetSprite + 'Quote').classList.toggle('fade')}, pageSettings.quoteTimer);
}
