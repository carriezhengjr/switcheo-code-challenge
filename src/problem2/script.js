const submitButton = document.getElementById('submit-button');
const successMessage = document.getElementById('success-message');
const form = document.getElementById('transaction-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const address = document.getElementById('input-address').value;
    const amount = document.getElementById('input-amount').value;
    const otp = document.getElementById('input-otp').value;

    if (address && amount && otp) {
        successMessage.innerHTML = "Transaction has been sent!";
        successMessage.style.display = "block";
    } else {
        successMessage.innerHTML = "";
        successMessage.style.display = "none";
    }
});

document.addEventListener('click', function() {
    successMessage.style.display = "none";
});
