const header = document.querySelector("header");
const home = document.getElementById('homePage');
const search = document.querySelector('#search-icon')
const searchForm = document.querySelector('#search-form')
const newBook = document.getElementById('newBook');
const oldBook = document.getElementById('oldBook');
const stationary = document.getElementById('stationary');
const aboutus = document.querySelector('.aboutUs');
const blogs = document.getElementById('blogs');


window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});



// window.onscroll = () => {
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');
// }

// search.onclick = () => {
//     searchForm.classList.toggle('active');
// }

// document.querySelector('#close').onclick = () =>{
//     document.querySelector('#search-form').classList.remove('active');
// }



home.addEventListener('click', () => {
    location.href = "appear.html";
});

newBook.addEventListener('click', () => {
    location.href = "newbook.html";
});

oldBook.addEventListener('click', () => {
    location.href = "oldbook.html";
});
stationary.addEventListener('click', () => {
    location.href = "stationary.html";
});
aboutus.addEventListener('click' , () => {
    location.href = "about.html";
});

blogs.addEventListener('click' , () => {
    location.href = "appear.html";
});



