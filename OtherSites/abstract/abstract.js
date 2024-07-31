import { loadNavbar } from '../../reusable-components/navbar/navbar.js';
import { loadFooter } from '../../reusable-components/footer/footer.js';
import { loadArticle } from '../../reusable-components/article/article.js';
import { loadWrapper } from '../../reusable-components/wrapper/wrapper.js';

import '../../styles/modern-normalize.css';
import '../../styles/styles.css';
import '../../styles/utils.css';


loadNavbar();
loadFooter();
loadArticle();

const wrapperData = [
    {
        title: 'Get Started in Abstract',
        links: [
            { href: '', text: 'Try out Abstract' },
            { href: '', text: 'The Abstract Design Workflow' },
            { href: '', text: 'Start Working In Abstract' },
            { href: '', text: 'Practice Abstract workflow' },
            { href: '', text: 'Glossary' }
        ]
    },
    {
        title: 'Using the Abstract Desktop App',
        links: [
            { href: '', text: 'Update to the newest version of Abstract' },
            { href: '', text: 'Backing Up your Work in Abstract' },
            { href: '', text: 'System requirements' },
            { href: '', text: 'Downloading the Abstract Desktop Application' },
            { href: '', text: 'The Abstract plugin' },
            { href: '', text: 'Keyboard shortcuts' }
        ],
        seeAllLink: { href: '', text: 'See all 13 articles' }
    },
    {
        title: 'Working in Projects',
        links: [
            { href: '', text: 'Name your project' },
            { href: '', text: 'Add files to your project' },
            { href: '', text: 'Create a branch' },
            { href: '', text: 'Open untracked vs. creating a branch' },
            { href: '', text: 'Change branch status' },
            { href: '', text: 'Rename a branch' }
        ],
        seeAllLink: { href: '', text: 'See all 10 articles' }
    },
    {
        title: 'Commit your work',
        links: [
            { href: '', text: 'A guide to commits' },
            { href: '', text: 'Committing changes in a branch' },
            { href: '', text: 'Commit history' },
            { href: '', text: 'Troubleshoot your commits' }
        ]
    },
    {
        title: 'Merge your work',
        links: [
            { href: '', text: 'A Guide to Merging' },
            { href: '', text: 'Merging to the main branch' },
            { href: '', text: 'Resolve conflicts' },
            { href: '', text: 'Restore to previous commit' },
            { href: '', text: 'Merge restrictions' }
        ]
    },
    {
        title: 'Work with libraries',
        links: [
            { href: '', text: 'Libraries Overview' },
            { href: '', text: 'Add a Library' },
            { href: '', text: 'Link a library' },
            { href: '', text: 'Update a library' },
            { href: '', text: 'Work with dependencies' },
            { href: '', text: 'Manage your libraries' }
        ]
    },
    {
        title: 'Collaborate in projects',
        links: [
            { href: '', text: 'Share your designs' },
            { href: '', text: 'Request a design review' },
            { href: '', text: 'Use collections' },
            { href: '', text: 'Sections within collections' },
            { href: '', text: 'Leave comments and annotations' },
            { href: '', text: 'Assets' }
        ],
        seeAllLink: { href: '', text: 'See all 8 articles' }
    },
    {
        title: 'Troubleshooting Abstract',
        links: [
            { href: '', text: 'General Troubleshooting' },
            { href: '', text: 'Troubleshoot sync errors' },
            { href: '', text: 'Resolve a pending commit' },
            { href: '', text: 'Resolve diverged branches' },
            { href: '', text: 'Previews and asset generation' },
            { href: '', text: 'Sync library components in Sketch' }
        ],
        seeAllLink: { href: '', text: 'See all 11 articles' }
    }
];

loadWrapper(wrapperData);