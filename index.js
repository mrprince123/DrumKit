// To select all the button
var numberOfDrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrum; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
    function handleClick() {

        var soundButton = this.innerHTML;

        keyPressSound(soundButton);
        buttonAnimation(soundButton);


    }
}

// For the Keyborad button press

document.addEventListener("keypress", simpleAlert);

function simpleAlert(event) {
    keyPressSound(event.key);
    buttonAnimation(event.key)
}


document.addEventListener("keypress", keyPressSound);
function keyPressSound(key){


        switch (key) {
            case "w":
                var audio = new Audio("sounds/crash.mp3")
                audio.play();
                break;

            case "a":
                var audio = new Audio("sounds/kick-bass.mp3")
                audio.play();
                break;

            case "s":
                var audio = new Audio("sounds/snare.mp3")
                audio.play();
                break;
            case "d":
                var audio = new Audio("sounds/tom-1.mp3")
                audio.play();
                break;

            case "j":
                var audio = new Audio("sounds/tom-2.mp3")
                audio.play();
                break;

            case "k":
                var audio = new Audio("sounds/tom-3.mp3")
                audio.play();
                break;

            case "l":
                var audio = new Audio("sounds/tom-4.mp3")
                audio.play();
                break;

            default: console.log(soundButton);
        }
}

// document.querySelectorAll("button")[0].addEventListener("click", playSound);

// function playSound(){
//     var audio = new Audio("sounds/crash.mp3");
//     audio.play();
// }

// var audio = new Audio("sounds/tom-1.mp3")
//         audio.play();


// For Animation

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);

}

setTimeout(function(){
    document.querySelector("footer").innerHTML = "Made by Prince ❤ In India.";
}, 3000);
