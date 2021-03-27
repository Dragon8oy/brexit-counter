//Hide all sprites and prepare quotes
animateSprite('spriteOne', 'reverse', pageSettings.spriteDuration / 2)
animateSprite('spriteTwo', 'reverse', pageSettings.spriteDuration / 2)
animateSprite('spriteThree', 'reverse', pageSettings.spriteDuration / 2)
getQuoteList(false, '')

//Begin loop to show sprites
setTimeout(selectSprite, pageSettings.spriteDuration / 2);
setInterval(selectSprite, pageSettings.quoteTimer / 1.5);

//Objects to store the state of each sprite
spriteOne = {
  active: false
}
spriteTwo = {
  active: false
}
spriteThree = {
  active: false
}

//Pick and animate a random sprite when called
//After pageSettings.spriteDuration has passed, hide the sprite
function selectSprite() {
  chooseSprite = Math.floor((Math.random() * 3) + 1) - 1;
  sprite = ["spriteOne", "spriteTwo", "spriteThree"][chooseSprite]

  if (window[sprite].active == false) {
    animateSprite(sprite, 'normal', pageSettings.spriteDuration)
    showQuote(sprite, quotes)
  }
}

//Animate the given sprite
function animateSprite(targetSprite, direction, duration) {
  document.getElementById(targetSprite).animate([
    { transform: 'translateY(500px)' }, //Start (Pixels off screen)
    { transform: 'translateY(50px)' } //End
  ], {
    duration: duration,
    fill: 'forwards',
    direction: direction,
    iterations: 1
  });
  if (direction == 'normal') {
    //Set the targetSprite to active and start a timer to reverse it
    window[targetSprite].active = true
    setTimeout( function () {animateSprite(targetSprite, 'reverse', pageSettings.spriteDuration)}, pageSettings.quoteTimer)
  } else {
    window[targetSprite].active = false
  }
}
