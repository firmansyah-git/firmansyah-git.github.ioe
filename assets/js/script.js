const scrollHeader = () => {
    const header = document.getElementById('header')
    window.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)


const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');

burger.addEventListener('click', () => {
  navbar.classList.toggle('active');
  burger.classList.toggle('active');
});



const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function(navLink) {
    navLink.addEventListener('mouseover', function(){
        navLinks.forEach(function(link) {
            link.classList.remove('nav-active');
        });
    })

    navLink.addEventListener('click', function() {
        navLinks.forEach(function(link) {
        link.classList.remove('nav-active');
        });

    // Tambahkan kelas "active" ke elemen navigasi yang diklik
    this.classList.add('nav-active');
    });
});

