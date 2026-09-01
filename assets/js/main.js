// Automatikus életkor számítás (Születési dátum: 2004.05.01)
document.addEventListener('DOMContentLoaded', () => {
    const birthDate = new Date('2004-05-01');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.querySelectorAll('.age-span').forEach(span => {
        span.textContent = age;
    });
});

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
}
showMenu('nav-toggle', 'nav-menu');

const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const link = document.querySelector('.nav_menu a[href*=' + sectionId + ']');

        if (link) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
}
window.addEventListener('scroll', scrollActive);

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: false
});

sr.reveal('.home_data, .about_img, .skills_subtitle, .skills_text, .section-title', {}); 
sr.reveal('.home_img, .about_name, .about_occupation, .about_profile, .about_text, .skills_img, .text', { delay: 400 }); 
sr.reveal('.home_social-icon', { interval: 50 }); 
sr.reveal('.skills_data', { interval: 50 });
sr.reveal('.projects_img', { interval: 50 });