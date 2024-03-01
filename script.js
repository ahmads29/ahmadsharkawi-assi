// background animation script
document.addEventListener("DOMContentLoaded", function() {
    const numParticles = 100;
    const particleContainer = document.querySelector(".particle-container");
    function createParticle() {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.top = Math.random() * 100 + "%";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.animationDuration = (Math.random() * 5 + 2) + "s";
        particleContainer.appendChild(particle);
    }
    for (let i = 0; i < numParticles; i++) {
        createParticle();
    }
});


//ham-menu script
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});

const menuItems = document.querySelectorAll('.menu li a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
    });
});