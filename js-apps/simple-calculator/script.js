let textArea = document.querySelector(".result-section");

function clearResult() {
    textArea.value = " ";
}

function display(value) {
    textArea.value += value;
}

function calc() {
    textArea.value = eval(textArea.value);
}