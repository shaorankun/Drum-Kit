// Detect button click
const buttons = document.querySelectorAll(".drum");
buttons.forEach(button => {
    button.onclick = () => {
        const letter = button.dataset.key; // read key safely
        makeSound(letter);
        buttonAnimation(letter);
    };
});




// Detect key press
document.addEventListener("keypress", (event) => {
    makeSound(event.key);
    buttonAnimation(event.key);
});

// Play sound depending on key
function makeSound(key) {
    console.log(key);
    switch (key) {
        case "w":
            new Audio("sounds/07_Snare_01_SP.wav").play();
            break;
        case "a":
            new Audio("sounds/07_Snare_02_SP.wav").play();
            break;
        case "s":
            new Audio("sounds/07_Snare_03_SP.wav").play();
            break;
        case "d":
            new Audio("sounds/07_Snare_04_SP.wav").play();
            break;
        case "j":
            new Audio("sounds/07_Snare_05_SP.wav").play();
            break;
        case "k":
            new Audio("sounds/07_Snare_06_SP.wav").play();
            break;
        case "l":
            new Audio("sounds/07_Snare_07_SP.wav").play();
            break;
        default:
            console.log(key);
    }
}

// Button animation
function buttonAnimation(currentKey) {
    const buttons = document.querySelectorAll(".drum");
    const activeButton = Array.from(buttons).find(
        button => button.textContent === currentKey
    );

    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(() => activeButton.classList.remove("pressed"), 100);
    }
}

