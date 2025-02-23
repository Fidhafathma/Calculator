function appendValue(value) {
    document.getElementById("display").value += value;
}

function cal(operator) {
    document.getElementById("display").value += " " + operator + " ";
}

function calculate() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (e) {
        document.getElementById("display").value = "Error";
    }
}

function clearValue() {
    document.getElementById("display").value = "";
}

function deleteValue() {
    let current = document.getElementById("display").value;
    document.getElementById("display").value = current.slice(0, -1);
}
