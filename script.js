const btn = document.querySelectorAll("input[type='button']");
const textField = document.querySelector(".textField");
btn.forEach((button) => button.addEventListener("click", getTheValue));

function getTheValue() {
    let value = this.value;

    if (value !== "C" && value !== "=") {
        textField.value = textField.value + value;
    }

    if (value == "=") {
        textField.value = eval(textField.value);
    }

    if (value == "C") {
        textField.value = "";
    }
}