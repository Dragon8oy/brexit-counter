animateSprite('spriteOne', 'reverse', pageSettings.spriteDuration / 2)
animateSprite('spriteTwo', 'reverse', pageSettings.spriteDuration / 2)
animateSprite('spriteThree', 'reverse', pageSettings.spriteDuration / 2)
getQuoteList(false, '')
setTimeout(selectSprite, pageSettings.spriteDuration / 2);

spriteOne = {
  active: 0
}
spriteTwo = {
  active: 0
}
spriteThree = {
  active: 0
}

function selectSprite() {
  chooseSprite = Math.floor((Math.random() * 3) + 1);
  if (chooseSprite == '1') {
    if (spriteOne.active == '0') {
      animateSprite('spriteOne', 'normal', pageSettings.spriteDuration)
      showQuote('spriteOne', quotes)
    }
  } else if (chooseSprite == '2') {
    if (spriteTwo.active == '0') {
      animateSprite('spriteTwo', 'normal', pageSettings.spriteDuration)
      showQuote('spriteTwo', quotes)
    }
  } else if (chooseSprite == '3') {
    if (spriteThree.active == '0') {
      animateSprite('spriteThree', 'normal', pageSettings.spriteDuration)
      showQuote('spriteThree', quotes)
    }
  }
  setTimeout(selectSprite, pageSettings.quoteTimer / 1.5);
}

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
    window[targetSprite].active = '1'
    setTimeout( function () {animateSprite(targetSprite, 'reverse', pageSettings.spriteDuration)}, pageSettings.quoteTimer)
  } else {
    window[targetSprite].active = '0'
  }
}
