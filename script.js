var viking = document.getElementById("viking");
var vikingBackgroundPositionX = 0;
var vikingIdleAnimationId = 0;



function vikingIdleAnimation() {
    vikingBackgroundPositionX = vikingBackgroundPositionX - 512.1;
    viking.style.backgroundPositionX = vikingBackgroundPositionX + "px";
}

function vikingIdleAnimationStart() {
    vikingIdleAnimationId = setInterval(vikingIdleAnimation, 200);
}

var troll = document.getElementById("troll");
var trollBackgroundPositionX = 0;
var trollIdleAnimationId = 0;

function trollIdleAnimation() {
    trollBackgroundPositionX = trollBackgroundPositionX - 420;
    troll.style.backgroundPositionX = trollBackgroundPositionX + "px";
}

function trollIdleAnimationStart() {
    trollIdleAnimationId = setInterval(trollIdleAnimation, 200);
}

function eventHandling(event) {

    var keycode = event.which;
    // alert(keycode);

    if (keyCode == 68) {
        vikingWalkAnimation();
        //D
    }

    if (keyCode == 37) {
        //left arrow
        trollWalkAnimation();
    }

}


var vikingBackgroundPositionY = 0;

function vikingWalkAnimation() {
    vikingBackgroundPositionX = 0;
    vikingBackgroundPositionY = -512;
    viking.style.backgroundPositionY = vikingBackgroundPositionY + "px";
}

var trollBackgroundPositionY = 0;

function trollWalkAnimation() {
    trollBackgroundPositionX = 0;
    trollBackgroundPositionY = -262.8;
    troll.style.backgroundPositionY = trollBackgroundPositionY + "px";
}