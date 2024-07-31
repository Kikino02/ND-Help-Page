import './navbar.scss';

export async function loadNavbar() {
    const response = await fetch('/reusable-components/navbar/navbar.html');
    const navbarHtml = await response.text();
    document.getElementById('navbar-container').innerHTML = navbarHtml;


    const toggleNav = (show) => {
        const displayStyle = show ? 'flex' : 'none';
        document.querySelector('.openNav').style.display = show ? 'none' : 'flex';
        document.querySelector('.closeNav').style.display = displayStyle;
        document.querySelector('.mobile-nav').style.display = displayStyle;
        document.querySelector('header').style.backgroundColor = show ? 'var(--color-darkgrey)' : 'var(--color-black)';
    };

    document.querySelector('.openNav').addEventListener('click', () => toggleNav(true));
    document.querySelector('.closeNav').addEventListener('click', () => toggleNav(false));
}


