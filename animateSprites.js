animateSprite('spriteOne', 'reverse')
animateSprite('spriteTwo', 'reverse')
animateSprite('spriteThree', 'reverse')
getQuoteList(false, '')
setTimeout(selectSprite, 1000);
function selectSprite() {
  chooseSprite = Math.floor((Math.random() * 3) + 1);
  if (chooseSprite == '1') {
    if (spriteOneUp == '1') {
      animateSprite('spriteOne', 'reverse')
    } else if (spriteOneUp = '0') {
      if (runOneAgain == '0') {
        showQuote('spriteOne', quotes)
        animateSprite('spriteOne', 'normal')
      }
    }
    runOneAgain = 0
  } else if (chooseSprite == '2') {
    if (spriteTwoUp == '1') {
      animateSprite('spriteTwo', 'reverse')
    } else if (spriteTwoUp = '0') {
      if (runTwoAgain == '0') {
        showQuote('spriteTwo', quotes)
        animateSprite('spriteTwo', 'normal')
      }
    }
    runTwoAgain = 0
  } else if (chooseSprite == '3') {
    if (spriteThreeUp == '1') {
      animateSprite('spriteThree', 'reverse')
    } else if (spriteThreeUp = '0') {
      if (runThreeAgain == '0') {
        showQuote('spriteThree', quotes)
        animateSprite('spriteThree', 'normal')
      }
    }
    runThreeAgain = 0
  }
  setTimeout(selectSprite, 3500);
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
    if (targetSprite == 'spriteOne') {spriteOneUp = '1';};
    if (targetSprite == 'spriteTwo') {spriteTwoUp = '1';};
    if (targetSprite == 'spriteThree') {spriteThreeUp = '1';};
  } else {
    if (targetSprite == 'spriteOne') {
      spriteOneUp = '0';
      runOneAgain = '1';
    };
    if (targetSprite == 'spriteTwo') {
      spriteTwoUp = '0';
      runTwoAgain = '1';
    };
    if (targetSprite == 'spriteThree') {
      spriteThreeUp = '0';
      runThreeAgain = '1';
    };
  }
}
