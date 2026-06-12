const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const menuIcon = menuToggle.querySelector('img');

function toggleMenu() {
    const isOpen = navMenu.classList.toggle('open');
    document.body.classList.toggle('menu-open', isOpen);
    if (isOpen) {
        menuIcon.src = 'assets/images/icon-menu-close.svg'; 
    } else {
        menuIcon.src = 'assets/images/icon-menu.svg'; 
    }
}

menuToggle.addEventListener('click', toggleMenu);

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
            toggleMenu();
        }
    });
});

document.body.addEventListener('click', (e) => {
    if (e.target === document.body && document.body.classList.contains('menu-open')) {
        toggleMenu();
    }
});