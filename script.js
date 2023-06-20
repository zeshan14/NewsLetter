function submitForm(event) {
  event.preventDefault();
  
  const emailInput = document.getElementById('emailInput');
  const successMessage = document.getElementById('successMessage');
  
  // Simulating form submission
  // Replace this with your own logic to handle form submission and storage of email addresses
  
  // Example success message
  successMessage.innerText = `Thank you for subscribing, ${emailInput.value}!`;
  
  // Clearing the input field
  emailInput.value = '';
}
