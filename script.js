// Original Percentage Calculator
document.getElementById('calculatorForm1').addEventListener('input', function() {
  const totalAmount = parseFloat(document.getElementById('totalAmount1').value);
  const percentage = parseFloat(document.getElementById('percentage1').value);

  if (isNaN(totalAmount) || isNaN(percentage)) {
    document.getElementById('result1').textContent = 'Result: $0.00';
    return;
  }

  const result = (totalAmount * percentage) / 100;
  document.getElementById('result1').textContent = `Result: $${result.toFixed(2)}`;
});

// "X is what percent of Y?" Calculator
document.getElementById('calculatorForm2').addEventListener('input', function() {
  const part = parseFloat(document.getElementById('part').value);
  const whole = parseFloat(document.getElementById('whole').value);

  if (isNaN(part) || isNaN(whole) || whole === 0) {
    document.getElementById('result2').textContent = 'Result: 0%';
    return;
  }

  const result = (part / whole) * 100;
  document.getElementById('result2').text
::contentReference[oaicite:0]{index=0}
 
