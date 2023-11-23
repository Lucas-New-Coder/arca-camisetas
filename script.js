document.addEventListener("DOMContentLoaded", function() {
    // Adiciona evento de clique nos links do menu
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    window.addEventListener('scroll', function() {
        let sections = document.querySelectorAll('.section');
        let navLinks = document.querySelectorAll('nav ul li a');
    
        sections.forEach(section => {
            if (section.getBoundingClientRect().top <= 50 && section.getBoundingClientRect().bottom >= 10) {
                let id = section.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});
function redirecionar() {
    
    window.open("https://google.com", "_blank");}

    function toggleMenu() {
        var nav = document.querySelector('nav');
        var hamburgerMenu = document.querySelector('.hamburger-menu');
        nav.classList.toggle('active');
        hamburgerMenu.classList.toggle('change');
    }