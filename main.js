import { loadNavbar } from './reusable-components/navbar/navbar.js';
import { loadFooter } from './reusable-components/footer/footer.js';

import './styles/modern-normalize.css';
import './styles/styles.css';
import './styles/components/header.css';
import './styles/components/help.css';
import './styles/components/cards.css';
import './styles/utils.css';


document.addEventListener('DOMContentLoaded', () => {
    loadNavbar();
    loadFooter();
})

