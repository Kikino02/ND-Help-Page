import { loadNavbar } from '../../../reusable-components/navbar/navbar.js';
import { loadFooter } from '../../../reusable-components/footer/footer.js';
import { loadArticle } from '../../../reusable-components/article/article.js';
import { loadWrapper } from '../../../reusable-components/wrapper/wrapper.js';

import '../../../styles/modern-normalize.css';
import '../../../styles/styles.css';
import './manage3.scss';
import '../../../styles/utils.css';

loadNavbar();
loadFooter();
loadArticle();


const wrapperData = [
    {
        title: 'Manage billing',
        links: [
            { href: '', text: 'Change your subscription' },
            { href: '', text: 'Manage billing details' },
            { href: '', text: 'View your billing details and invoices' },
        ],
    }
];

loadWrapper(wrapperData);