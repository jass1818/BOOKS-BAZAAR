const bookForm = document.getElementById('book-form');
const priceInput = document.getElementById('price-of-book');
const bookPriceElement = document.getElementById('book-price');
const sellButton = document.querySelector('.sellbtn');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.close-popup');

let isFormSubmitted = false;

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const bookPrice = parseFloat(priceInput.value);
  const discountPercentage = Math.random() * (50 - 40) + 40; 
  const discountedPrice = bookPrice - (bookPrice * (discountPercentage / 100));

  bookPriceElement.textContent = `Original Price: $${bookPrice.toFixed(2)} | Selling price of Book: $${discountedPrice.toFixed(2)}`;

  isFormSubmitted = true;
  sellButton.disabled = false; 
  sellButton.classList.remove('disabled'); 
  sellButton.style.pointerEvents = 'auto'; 
  sellButton.style.opacity = 1; // add this line
  sellButton.style.transform = 'scale(1)'; // add this line
});

sellButton.addEventListener('click', () => {
  if (!isFormSubmitted) return; 

  // Show the popup with animation
  popup.style.display = 'flex';
  popup.classList.add('animate-popup');
  popup.style.background = 'rgba(0, 0, 0, 0.5)'; // add this line
  popup.style.borderRadius = '10px'; // add this line
  popup.style.padding = '20px'; // add this line
  popup.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)'; // add this line
});

closeButton.addEventListener('click', () => {
  // Hide the popup with animation
  popup.classList.remove('animate-popup');
  setTimeout(() => {
    popup.style.display = 'none';
  }, 500); 
});