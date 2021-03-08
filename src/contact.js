const contactModule = () => {

    const content = document.querySelector('#content');

    const contactTab = document.querySelector('#contact');
    contactTab.classList.add('current-tab');

    const div = document.createElement('div');
    div.classList.add('main');

    const firstP = document.createElement('p');
    firstP.innerHTML = 'Phone: 123-456-7890';

    const secondP = document.createElement('p');
    secondP.innerHTML = 'Address: Some where on planet Earth!'

    const img = document.createElement('img');
    img.setAttribute('src', './images/restaurant-location.png');

    div.appendChild(firstP);
    div.appendChild(secondP);
    div.appendChild(img);

    content.appendChild(div);

};

export { contactModule as default };