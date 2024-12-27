let currentInput = "";

function button(value) {
    currentInput += value;
    document.getElementById("input").value = currentInput;
}

function inputClear() {
    currentInput = "";
    document.getElementById("input").value = currentInput;
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById("input").value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById("input").value = currentInput;
    } catch (error) {
        document.getElementById("input").value = "Erro";
        currentInput = "";
    }
}
