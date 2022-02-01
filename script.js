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

// function eventHandling(event) {

//     var keycode = event.which;

//     if (keyCode == 68) {
//         //D
//     }

//     if (keyCode == 37) {
//         //left arrow
//     }

// }

// var vikingBackgroundPositionY = 0;

// function vikingWalkAnimation() {
//     vikingBackgroundPositionY = -512;
//     viking.style.backgroundPositionY = vikingBackgroundPositionY + "px";
// }

// var trollBackgroundPositionY = 0;

// function trollWalkAnimation() {
//     trollBackgroundPositionY = -512;
//     troll.style.backgroundPositionY = trollBackgroundPositionY + "px";
// }