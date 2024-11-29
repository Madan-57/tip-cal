const billAmountInput = document.getElementById('billAmount');
const tipPercentageSelect = document.getElementById('tipPercentage');
const calculateButton = document.getElementById('calculate');
const tipAmountSpan = document.getElementById('tipAmount');
const totalAmountSpan = document.getElementById('totalAmount');

calculateButton.addEventListener('click', (e) => {
    e.preventDefault();
    const billAmount = parseFloat(billAmountInput.value);
    const tipPercentage = parseFloat(tipPercentageSelect.value);
    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;
    tipAmountSpan.textContent = tipAmount.toFixed(2);
    totalAmountSpan.textContent = totalAmount.toFixed(2);
});