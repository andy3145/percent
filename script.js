document.getElementById('calculatorForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const totalAmount = parseFloat(document.getElementById('totalAmount').value);
  const percentage = parseFloat(document.getElementById('percentage').value);

  if (isNaN(totalAmount) || isNaN(percentage)) {
    alert('Please enter valid numbers.');
    return;
  }

  const result = (totalAmount * percentage) / 100;
  document.getElementById('result').textContent = `Result: $${result.toFixed(2)}`;
});
