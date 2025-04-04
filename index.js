// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Animate stats cards when scrolled into view
const statCards = document.querySelectorAll('.stat-card');
const teamCards = document.querySelectorAll('.team-card');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

statCards.forEach(card => {
    observer.observe(card);
});

teamCards.forEach((card, index) => {
    observer.observe(card);
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Generate random floating elements
const floatingContainer = document.querySelector('.floating-elements');
for (let i = 0; i < 8; i++) {
    const size = Math.random() * 100 + 50;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    const element = document.createElement('div');
    element.classList.add('floating-element');
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.left = `${x}%`;
    element.style.top = `${y}%`;
    element.style.animationDuration = `${duration}s`;
    element.style.animationDelay = `${delay}s`;
    
    floatingContainer.appendChild(element);
}