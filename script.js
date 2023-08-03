
function appendToOutput(value) {
    document.getElementById('output').textContent += value;
}

function calculate() {
    const expression = document.getElementById('output').textContent;
    try {
        const result = eval(expression);
        document.getElementById('output').textContent = result;
    } catch (error) {
        document.getElementById('output').textContent = 'Error';
    }
}

function clearOutput() {
    document.getElementById('output').textContent = '';
}

function backspace() {
    const currentOutput = document.getElementById('output').textContent;
    document.getElementById('output').textContent = currentOutput.slice(0, -1);
}
