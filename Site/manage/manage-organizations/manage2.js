import { loadNavbar } from '../../../reusable-components/navbar/navbar.js';
import { loadFooter } from '../../../reusable-components/footer/footer.js';
import { loadArticle } from '../../../reusable-components/article/article.js';
import { loadWrapper } from '../../../reusable-components/wrapper/wrapper.js';

import '../../../styles/modern-normalize.css';
import '../../../styles/styles.css';
import './manage2.scss'
import '../../../styles/utils.css';

loadNavbar();
loadFooter();
loadArticle();


const wrapperData = [
    {
        title: 'Get Started in Abstract',
        links: [
            { href: '#', text: 'Try out Abstract' },
            { href: '#', text: 'The Abstract Design Workflow' },
            { href: '#', text: 'Start Working In Abstract' },
            { href: '#', text: 'Practice Abstract workflow' },
            { href: '#', text: 'Glossary' }
        ]
    }
];

loadWrapper(wrapperData);