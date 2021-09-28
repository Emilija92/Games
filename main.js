let nav = document.querySelector('nav');
let openIcon = document.querySelector('.fa-bars');
let closeIcon = document.querySelector('.fa-times');
let ul = document.querySelector('.navUl');

openIcon.addEventListener('click', function(e) {
    e.preventDefault();
    nav.style.height = "30vh";
    nav.classList.add('openNav');
    nav.classList.remove('closeNav');
    ul.style.display = "block";
    closeIcon.style.display = "block";
    openIcon.style.display = "none";
});

closeIcon.addEventListener('click', function(e) {
    e.preventDefault();
    nav.style.height = "8vh";
    ul.style.display = "none";
    nav.classList.remove('openNav');
    nav.classList.add('closeNav');
    closeIcon.style.display = "none";
    openIcon.style.display = "block";
})