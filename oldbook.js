const checkboxes = document.querySelectorAll('.types');
const products = document.querySelectorAll('.box');
const cartProduct = document.querySelector('.cart-btn');
const home = document.querySelector('.home');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const brand = checkbox.value; // get the value of the checkbox
    products.forEach(product => {
      const productBrand = product.dataset.brand; // get the brand of the product
      if (productBrand === brand) {
        product.style.display = checkbox.checked ? 'block' : 'none';
      }
    });
  });
});

cartProduct.addEventListener('click' , () => {
  alert("Sorry! currently cart is not working!");
});

home.addEventListener('clicl' , () =>{
  window.location.href = "appear.html";
});