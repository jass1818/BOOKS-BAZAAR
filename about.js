document.addEventListener("DOMContentLoaded", function () {
    const heading = document.querySelector('.heading');
    const text = 'About Us';
    const textArray = text.split('');

    heading.innerHTML = '';

    textArray.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${index * 0.05}s`;
        heading.appendChild(span);
    });

    // trigger animation after 5 seconds
    setTimeout(function () {
        heading.classList.add('animate');
    }, 5000);
});

// const contactInfo = document.querySelectorAll('.contact-info p');

// contactInfo.forEach((item) => {
//     item.addEventListener('click', () => {
//         const contactDetail = item.querySelector('.contact-detail');
//         contactDetail.style.display = contactDetail.style.display === 'block' ? 'none' : 'block';
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const heading = document.querySelector('.heading');
    const text = 'About Us';
    const textArray = text.split('');
  
    heading.innerHTML = '';
  
    textArray.forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.animationDelay = `${index * 0.05}s`;
      heading.appendChild(span);
    });
  
    // trigger animation after 5 seconds
    setTimeout(function () {
      heading.classList.add('animate');
    }, 5000);
  });
  
  const contactInfo = document.querySelectorAll('.contact-info p');
  
  contactInfo.forEach((item) => {
    item.addEventListener('click', () => {
      const contactDetail = item.querySelector('.contact-detail');
      contactDetail.style.display = contactDetail.style.display === 'block' ? 'none' : 'block';
  
      // Add animation or transition to contact links
      contactDetail.classList.add('animate-contact');
      setTimeout(() => {
        contactDetail.classList.remove('animate-contact');
      }, 500);
    });
  });


let home = document.querySelector('.home');
home.addEventListener('click' , () =>{
    window.location.href = 'appear.html';
});
