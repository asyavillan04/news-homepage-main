const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const menuIcon = menuToggle.querySelector('img');

function toggleMenu() {
    const isOpen = navMenu.classList.toggle('open');
    document.body.classList.toggle('menu-open', isOpen);
    if (isOpen) {
        menuIcon.src = 'assets/images/icon-menu-close.svg';
        const firstLink = navMenu.querySelector('a');
        if (firstLink) firstLink.focus();
    } else {
        menuIcon.src = 'assets/images/icon-menu.svg';
        menuToggle.focus();  
    }
}

menuToggle.addEventListener('click', toggleMenu);


document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        toggleMenu();
    }
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) toggleMenu();
    });
});