import './navbar.scss';

export async function loadNavbar() {
    const response = await fetch('/reusable-components/navbar/navbar.html');
    const navbarHtml = await response.text();
    document.getElementById('navbar-container').innerHTML = navbarHtml;
}