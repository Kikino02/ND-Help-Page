import { loadNavbar } from '../../reusable-components/navbar/navbar.js';
import { loadFooter } from '../../reusable-components/footer/footer.js';
import { loadArticle } from '../../reusable-components/article/article.js';
import { loadWrapper } from '../../reusable-components/wrapper/wrapper.js';

import '../../styles/modern-normalize.css';
import '../../styles/styles.css';
import './support.scss'
import '../../styles/utils.css';

loadNavbar();
loadFooter();
loadArticle();



const wrapperData = [
    {
        title: 'Abstract Support',
        links: [
            { href: '', text: 'Contact Support' },
        ],
    }
];

loadWrapper(wrapperData);