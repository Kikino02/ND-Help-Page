import { loadNavbar } from './reusable-components/navbar/navbar.js';
import { loadFooter } from './reusable-components/footer/footer.js';
import { inject } from '@vercel/analytics';

import './styles/modern-normalize.css';
import './styles/styles.css';
import './styles/components/help.css';
import './styles/components/cards.css';
import './styles/utils.css';


loadNavbar();
loadFooter();
inject();


