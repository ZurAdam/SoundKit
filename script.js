
document.addEventListener("keypress", function(event){
    const keyName = event.key
    makeSound(keyName);
    buttonAnimation(keyName);
});

function makeSound(key){
    switch (key ) {
        case  "a":
            const boom = new Audio("sounds/boom.wav")
            boom.play();
            break;

        case "s":
            const clap = new Audio("sounds/clap.wav")
            clap.play();
            break;

        case "d":
            const hithat = new Audio("sounds/hihat.wav")
            hithat.play();
            break;

        case "f":
            const kick = new Audio("sounds/kick.wav")
            kick.play();
            break;

        case "g":
            const openhat = new Audio("sounds/openhat.wav")
            openhat.play();
            break;

        case "h":
            const ride = new Audio("sounds/ride.wav")
            ride.play();
            break;

        case "j":
            const snare = new Audio("sounds/snare.wav")
            snare.play();
            break;

        case "k":
            const tink = new Audio("sounds/tink.wav")
            tink.play();
            break;
        
        case "l":
            const tom = new Audio("sounds/tom.wav")
            tom.play();
            break;

        default: console.log("something went wrong");
            break;
    }

}

function buttonAnimation(currentKey ){
let querryBtn = document.querySelector("." + currentKey);
querryBtn.classList.add("pressed");

setTimeout (function (){
querryBtn.classList.remove("pressed");
},100);

}