function calculatePercentage() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);

    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
        return;
    }

    const result = (number1 / number2) * 100;
    document.getElementById('result').textContent = `${number1} is ${result.toFixed(2)}% of ${number2}`;
}
