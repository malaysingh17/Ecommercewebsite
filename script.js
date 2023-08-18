const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
      console.log('Mobile Navbar Opened');
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    }) 
}
// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the form elements
    const emailInput = document.getElementById('emailInput');
    const signupButton = document.getElementById('signupButton');
  
    // Add a click event listener to the signup button
    signupButton.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Get the user's email input
      const email = emailInput.value;
  
      // Validate the email (you can add more validation logic here)
      if (email.trim() === '') {
        alert('Please enter a valid email address');
        return;
      }
  
      // You can send the user's email to a server using AJAX or fetch
      // For now, let's just log it to the console
      console.log('User email:', email);
  
      // Clear the email input after processing
      emailInput.value = '';
    });
  });
  