let screen = document.getElementById("cal-display");
const buttons = document.querySelectorAll("button");
let screenValue = "";
for (i = 0; i < buttons.length; i++) {
    const perButton = buttons[i];
    perButton.addEventListener("click", function (event) {
        let pressedValue = event.target.innerText;
        if (pressedValue == "=") {
            screen.value = eval(screenValue);
        }else if(pressedValue == "AC"){
            screenValue = "";
            screen.value = screenValue;
        }else if(pressedValue == "Del"){
            screenValue = screenValue.slice(0, - 1)
            screen.value = screenValue;
        }
        else {
            screenValue = screenValue + pressedValue;
            screen.value = screenValue;
        }
    })
}