function calculatePercentage() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
        return;
    }

    const percentage = (num1 / num2) * 100;
    document.getElementById('result').textContent = `${num1} is ${percentage.toFixed(2)}% of ${num2}`;
}
