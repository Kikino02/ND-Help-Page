import './wrapper.scss'

export function loadWrapper(wrapperData) {
    const container = document.querySelector('.container');
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    wrapperData.forEach(item => {
        const wrapperItem = document.createElement('div');
        wrapperItem.classList.add('wrapper-item');

        const title = document.createElement('h2');
        title.classList.add('item__title');
        title.textContent = item.title;
        wrapperItem.appendChild(title);

        const list = document.createElement('ul');
        list.classList.add('item__list');

        item.links.forEach(link => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = link.href;
            anchor.textContent = link.text;
            listItem.appendChild(anchor);
            list.appendChild(listItem);
        })

        wrapperItem.appendChild(list);

        if (item.seeAllLink) {
            const seeAllAnchor = document.createElement('a');
            seeAllAnchor.href = item.seeAllLink.href;
            seeAllAnchor.classList.add('seeArticles');
            seeAllAnchor.textContent = item.seeAllLink.text;
            wrapperItem.appendChild(seeAllAnchor);
        }

        wrapper.appendChild(wrapperItem);
    })

    container.appendChild(wrapper);
}



// const wrapperData = [
//     {
//         title: '',
//         links: [
//             { href: '', text: '' },
//             { href: '', text: '' },
//             { href: '', text: '' },
//             { href: '', text: '' },
//             { href: '', text: '' },
//             { href: '', text: '' }
//         ],
//         seeAllLink: { href: '', text: '' }
//     }
// ];