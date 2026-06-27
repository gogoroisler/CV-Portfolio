// Fade-in al hacer scroll
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

// Scroll spy: resalta el nav link de la sección visible
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('#nav a[href^="#"]');

const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove('active'));
            const active = document.querySelector(`#nav a[href="#${entry.target.id}"]`);
            if (active) active.classList.add('active');
        }
    });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => spyObserver.observe(s));

// Sombra en el header al hacer scroll
const header = document.querySelector('.container-header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
});

// Typewriter hero
const phrases = [
    { text: 'Desarrollador de Software', color: '#1CB698' },
    { text: 'Administrativo Contable',   color: 'whitesmoke' }
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEl = document.getElementById('typewriter');

function type() {
    const current = phrases[phraseIndex];
    typeEl.style.color = current.color;
    typeEl.textContent = current.text.slice(0, charIndex);

    let speed = isDeleting ? 45 : 80;

    if (!isDeleting && charIndex === current.text.length) {
        speed = 2200;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 400;
    }

    charIndex += isDeleting ? -1 : 1;
    setTimeout(type, speed);
}

type();

let menuVisible = false;
// funcion menu
function mostrarOcultarMenu(){
    if (menuVisible){
        document.getElementById("nav").classList.remove("responsive");
        menuVisible=false;
    }else{
        document.getElementById("nav").classList.add("responsive");
        menuVisible=true;
    }
}

function seleccionar(){
    // ocultar menu luego de seleccionar
    document.getElementById("nav").classList.remove("responsive");
    menuVisible=false;
}

