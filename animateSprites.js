animateSprite('spriteOne', 'reverse')
animateSprite('spriteTwo', 'reverse')
animateSprite('spriteThree', 'reverse')
getQuoteList(false, '')
setTimeout(selectSprite, 1000);

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
      animateSprite('spriteOne', 'normal')
      showQuote('spriteOne', quotes)
    }
  } else if (chooseSprite == '2') {
    if (spriteTwo.active == '0') {
      animateSprite('spriteTwo', 'normal')
      showQuote('spriteTwo', quotes)
    }
  } else if (chooseSprite == '3') {
    if (spriteThree.active == '0') {
      animateSprite('spriteThree', 'normal')
      showQuote('spriteThree', quotes)
    }
  }
  setTimeout(selectSprite, pageSettings.quoteTimer / 1.5);
}

function animateSprite(targetSprite, direction) {
    document.getElementById(targetSprite).animate([
    { transform: 'translateY(500px)' }, //Start (Pixels off screen)
    { transform: 'translateY(50px)' } //End
  ], {
    duration: 2000,
    fill: 'forwards',
    direction: direction,
    iterations: 1
  });
  if (direction == 'normal') {
    if (targetSprite == 'spriteOne') {spriteOne.active = '1'; setTimeout( function () {animateSprite(targetSprite, 'reverse')}, pageSettings.quoteTimer)};
    if (targetSprite == 'spriteTwo') {spriteTwo.active = '1'; setTimeout( function () {animateSprite(targetSprite, 'reverse')}, pageSettings.quoteTimer)};
    if (targetSprite == 'spriteThree') {spriteThree.active = '1'; setTimeout( function () {animateSprite(targetSprite, 'reverse')}, pageSettings.quoteTimer)};
  } else {
    if (targetSprite == 'spriteOne') {spriteOne.active = '0'};
    if (targetSprite == 'spriteTwo') {spriteTwo.active = '0'};
    if (targetSprite == 'spriteThree') {spriteThree.active = '0'};
  }
}
