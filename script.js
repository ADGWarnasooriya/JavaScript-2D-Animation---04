var viking = document.getElementById("viking");
var vikingBackgroundPositionX = 0;
var vikingIdleAnimationId = 0;

function vikingIdleAnimation() {
    vikingBackgroundPositionX = vikingBackgroundPositionX - 512.1;
    viking.style.marginLeft.BackgroundPositionX = vikingBackgroundPositionX + "px";
}

function vikingIdleAnimationStart() {
    vikingIdleAnimationId = setInterval(vikingIdleAnimation, 200);
}