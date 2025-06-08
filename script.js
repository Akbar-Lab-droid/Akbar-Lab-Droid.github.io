// Hamburger Menu Toggle
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
});

// Typing Effect for Hero Section
if (document.querySelector('.typing-text')) {
    const typed = new Typed('.typing-text', {
        strings: ['Developer Teyvat', 'Desainer Magis', 'Petualang Digital'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
    });
}

// Particles.js for Hero Background
if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#FFB300' }, /* Golden Amber */
            shape: { type: 'star' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#00C4B4', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out' }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });
}

// Lottie Animation for Character
if (document.getElementById('lottie-character')) {
    lottie.loadAnimation({
        container: document.getElementById('lottie-character'),
        path: 'https://assets.lottiefiles.com/packages/lf20_3vbcfh.json', // Ganti dengan animasi Genshin Impact
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
}

// GSAP for Portfolio Card Hover
document.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, { rotationY: 10, scale: 1.05, duration: 0.5, boxShadow: "0 10px 20px rgba(0, 196, 180, 0.5)" });
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(card, { rotationY: 0, scale: 1, duration: 0.5, boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)" });
    });
});

// Handle Hash-based Navigation
function handleNavigation() {
    const hash = window.location.hash || '#home';
    const sections = document.querySelectorAll('#content > section');
    let targetPage = 'index.html';

    // Map hash to corresponding HTML file
    const hashMap = {
        '#home': 'index.html',
        '#about': 'index.html',
        '#portfolio': 'index.html',
        '#contact': 'index.html'
    };

    // Determine target page
    targetPage = hashMap[hash] || 'index.html';

    // If not on the correct page, redirect
    if (!window.location.pathname.includes(targetPage)) {
        window.location.href = `/${targetPage}${hash}`;
        return;
    }

    // Hide all sections
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the target section
    const targetSection = document.querySelector(hash);
    if (targetSection) {
        targetSection.style.display = 'block';
    }

    // Update active nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === hash) {
            link.classList.add('active');
        }
    });
}

// Run navigation handler on page load and hash change
window.addEventListener('load', handleNavigation);
window.addEventListener('hashchange', handleNavigation);

// Handle nav link clicks
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        window.location.hash = href;
    });
});
