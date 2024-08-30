// Get the header element
const header = document.querySelector("header");

// Get the navigation links
const home = document.getElementById('homePage');
const newBook = document.getElementById('newBook');
const oldBook = document.getElementById('oldBook');
const stationary = document.getElementById('stationary');
const aboutus = document.querySelector('.aboutUs');
const blogs = document.getElementById('blogs');

// Add event listener to the window scroll event
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Function to handle navigation link clicks
function handleLinkClick(event) {
  event.preventDefault();
  const link = event.target;
  const href = link.getAttribute('href');
  window.location.href = href;
}

// Add event listeners to the navigation links
home.addEventListener('click', handleLinkClick);
newBook.addEventListener('click', handleLinkClick);
oldBook.addEventListener('click', handleLinkClick);
stationary.addEventListener('click', handleLinkClick);
aboutus.addEventListener('click', handleLinkClick);
blogs.addEventListener('click', handleLinkClick);

// Add event listener to the navbar toggler
document.querySelector('.navbar-toggler').addEventListener('click', function() {
  document.querySelector('.offcanvas').classList.toggle('show');
});

// Add event listener to the search icon
document.querySelector('#search-icon').addEventListener('click', function() {
  console.log('Search functionality not implemented yet!');
});

// Get the contact form elements
const contactForm = document.querySelector('.contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const submitButton = document.querySelector('button[type="submit"]');

// Function to validate the form
function validateForm() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === '') {
    console.log('Please enter your name');
    return;
  }

  if (email === '') {
    console.log('Please enter your email');
    return;
  }

  if (message === '') {
    console.log('Please enter your message');
    return;
  }

  // If all fields are valid, show a success message and redirect to home screen
  alert('Thank you for contacting us! Your thoughts have been recorded.');
  window.location.href = 'appear.html';
}

// Add event listener to the submit button
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  validateForm();
});

// Function to validate email address
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Add event listener to the name input field
nameInput.addEventListener('input', () => {
  const name = nameInput.value.trim();
  if (name.length > 20) {
    console.log('Name should not be more than 20 characters');
  }
});

// Add event listener to the email input field
emailInput.addEventListener('input', () => {
  const email = emailInput.value.trim();
  if (!validateEmail(email)) {
    console.log('Please enter a valid email address');
  }
});

// Add event listener to the message input field
messageInput.addEventListener('input', () => {
  const message = messageInput.value.trim();
  if (message.length > 200) {
    console.log('Message should not be more than 200 characters');
  }
});