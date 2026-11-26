/* jshint esversion: 6 */

// Regex patterns for each field
const nameRegex = /^[A-Za-z\s]{2,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const messageRegex = /^[A-Za-z0-9\s.,!?'"()-]{10,}$/;

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (event) {
  // Stop the form submitting until validation has passed
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  // Clear previous errors
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';

  let isValid = true;

  // Validate name
  if (name === '') {
    nameError.textContent = 'Name is required.';
    isValid = false;
  } else if (!nameRegex.test(name)) {
    nameError.textContent = 'Name must be at least 2 letters.';
    isValid = false;
  }

  // Validate email
  if (email === '') {
    emailError.textContent = 'Email is required.';
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  // Validate message
  if (message === '') {
    messageError.textContent = 'Message is required.';
    isValid = false;
  } else if (!messageRegex.test(message)) {
    messageError.textContent = 'Message must be at least 10 characters (letters, numbers and basic punctuation only).';
    isValid = false;
  }

  // Only submit once every field is valid
  if (isValid) {
    alert('Thank you, your message has been sent!');
    contactForm.reset();
  }
});
