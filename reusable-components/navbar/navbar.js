import './navbar.scss';

export async function loadNavbar() {
    const response = await fetch('/reusable-components/navbar/navbar.html');
    const navbarHtml = await response.text();
    document.getElementById('navbar-container').innerHTML = navbarHtml;


    const bars = document.querySelector('.openNav');
    const close = document.querySelector('.closeNav');
    const mobileNav = document.querySelector('.mobile-nav');

    bars.addEventListener('click', () => {
        bars.style.display = 'none';
        close.style.display = 'flex';
        mobileNav.style.display = 'flex';
        document.querySelector('header').style.backgroundColor = 'var(--color-darkgrey)';
    })
    close.addEventListener('click', () => {
        bars.style.display = 'flex';
        close.style.display = 'none';
        mobileNav.style.display = 'none';
        document.querySelector('header').style.backgroundColor = 'var(--color-black)';
    })
}


