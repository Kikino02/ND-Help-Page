import './footer.scss';

export async function loadFooter() {
    const response = await fetch('/reusable-components/footer/footer.html');
    const footerHtml = await response.text();
    document.getElementById('footer-container').innerHTML = footerHtml;
}