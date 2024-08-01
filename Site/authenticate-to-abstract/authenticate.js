import { loadNavbar } from '../../reusable-components/navbar/navbar.js';
import { loadFooter } from '../../reusable-components/footer/footer.js';
import { loadArticle } from '../../reusable-components/article/article.js';
import { loadWrapper } from '../../reusable-components/wrapper/wrapper.js';

import '../../styles/modern-normalize.css';
import '../../styles/styles.css';
import './authenticate.scss'
import '../../styles/utils.css';

loadNavbar();
loadFooter();
loadArticle();



const wrapperData = [
    {
        title: 'Authenticate to Abstract',
        links: [
            { href: '', text: 'Understand single sign-on' },
            { href: '', text: 'Configure single sign-on using ADFS' },
            { href: '', text: 'Configure single sign-on using Amazon Web Services' },
            { href: '', text: 'Configure single sign-on using Azure AD' },
            { href: '', text: 'Configure single sign-on using Google SAML' },
            { href: '', text: 'Configure single sign-on using Okta' }
        ],
        seeAllLink: { href: '', text: 'See all 11 articles' }
    }
];

loadWrapper(wrapperData);