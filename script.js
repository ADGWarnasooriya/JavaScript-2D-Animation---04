var viking = document.getElementById("viking");
var vikingBackgroundPositionX = 0;
var vikingIdleAnimationId = 0;

var troll = document.getElementById("troll");
var trollBackgroundPossitionX = 0;
var trollIdleAnimationId = 0;

function vikingIdleAnimation() {
    vikingBackgroundPositionX = vikingBackgroundPositionX - 512.1;
    viking.style.BackgroundPositionX = vikingBackgroundPositionX + "px";
}

function vikingIdleAnimationStart() {
    vikingIdleAnimationId = setInterval(vikingIdleAnimation, 200);
}

function trollIdleAnimation() {
    trollBackgroundPossitionX = trollBackgroundPossitionX - 420;
    troll.style.BackgroundPossitionX = trollBackgroundPossitionX + "px";
}

function trollIdleAnimationStart() {
    trollIdleAnimationId = setInterval(trollIdleAnimation, 200);
}

function eventHandling(event) {

    var keycode = event.which;

    if (keyCode == 68) {
        //D
    }

    if (keyCode == 37) {
        //left arrow
    }

}