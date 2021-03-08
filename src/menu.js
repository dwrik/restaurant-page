const menuModule = () => {

    const menu = [
        {
            title: 'The All in One',
            url: './images/karthik-garikapati-oBbTc1VoT-0-unsplash.jpg',
        },
        {
            title: 'The Spicy One',
            url: './images/likemeat-CbNAuxSZTFo-unsplash.jpg',
        },
        {
            title: 'The Cheesy One',
            url: './images/fatima-akram-uU0Anw-8Vsg-unsplash.jpg',
        },
        {
            title: 'The Red Devil',
            url: './images/hemant-latawa-IfQlwNqJqV8-unsplash.jpg',
        },
    ];

    const content = document.querySelector('#content');

    const menuTab = document.querySelector('#menu');
    menuTab.classList.add('current-tab');

    const div = document.createElement('div');
    div.classList.add('card-container');

    for (let index in menu) {
        const item = menu[index];
        const card = getCard(item.title, item.url);
        div.appendChild(card);
    }

    content.appendChild(div);

    // helper
    function getCard(title, url) {
        const div = document.createElement('div');
        div.classList.add('card');
        div.style.backgroundImage = `url("${url}")`;

        const p = document.createElement('p');
        p.classList.add('title');
        p.innerHTML = title;

        div.appendChild(p);
        return div;
    };

};

export { menuModule as default };