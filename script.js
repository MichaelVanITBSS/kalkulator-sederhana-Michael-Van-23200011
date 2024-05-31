function appendToDisplay(value) {
    if (value === 'sqrt') {
        document.getElementById('display').value += 'Math.sqrt(';
    } else {
        document.getElementById('display').value += value;
    }
}


function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    var input = document.getElementById('display').value;
    try {
        input = input.replace(/sqrt/g, 'Math.sqrt'); 
        var result = Function('"use strict";return (' + input + ')')();
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
