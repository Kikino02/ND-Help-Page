import { loadNavbar } from '../../reusable-components/navbar/navbar.js';
import { loadFooter } from '../../reusable-components/footer/footer.js';
import { loadArticle } from '../../reusable-components/article/article.js';

import '../../styles/modern-normalize.css';
import './abstract.scss';
import '../../styles/utils.css';


document.addEventListener('DOMContentLoaded', () => {
    loadNavbar();
    loadFooter();
    loadArticle();
})

