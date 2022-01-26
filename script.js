var viking = document.getElementById("viking");
var vikingBackgroundPositionX = 0;
var vikingIdleAnimationId = 0;

function vikingIdleAnimation() {
    vikingIdleAnimationNumber = vikingIdleAnimationNumber - 512.1;
    viking.style.marginLeft = vikingIdleAnimationNumber
}