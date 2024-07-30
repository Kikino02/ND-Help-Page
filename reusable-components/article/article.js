import './article.scss';

export async function loadArticle() {
    const respone = await fetch('/reusable-components/article/article.html');
    const articleHtml = await respone.text();
    document.getElementById('article-container').innerHTML = articleHtml;
    updateArticleContent();
}

function updateArticleContent() {
    const pageTitle = document.title.toLowerCase();
    const listItem = document.querySelector('.list__item');
    const titleElement = document.querySelector('.title');
    const subtitleElement = document.querySelector('.subtitle');

    switch (true) {
        case pageTitle.includes('manage your account'):
            listItem.textContent = 'Manage your account'
            titleElement.textContent = listItem.textContent;
            subtitleElement.textContent = 'Configure your account settings, such as your email, profile details, and password.';
            break;
        case pageTitle.includes('manage organizations, teams, and projects'):
            listItem.textContent = 'Manage organizations, teams, and projects'
            titleElement.textContent = listItem.textContent;
            subtitleElement.textContent = 'Use Abstract organizations, teams, and projects to organize your people and your work.';
            break;
        case pageTitle.includes('manage billing'):
            listItem.textContent = 'Manage billing'
            titleElement.textContent = listItem.textContent;
            subtitleElement.textContent = 'Change subscriptions and payment details.';
            break;
        case pageTitle.includes('authenticate to abstract'):
            listItem.textContent = 'Authenticate to Abstract'
            titleElement.textContent = listItem.textContent;
            subtitleElement.textContent = 'Set up and configure SSO, SCIM, and Just-in-Time provisioning.';
            break;
        case pageTitle.includes('Abstract support'):
            listItem.textContent = 'Abstract support'
            titleElement.textContent = listItem.textContent;
            subtitleElement.textContent = 'Get in touch with a human.';
            break;
    }
}