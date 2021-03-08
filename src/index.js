import homeModule from './home';
import contactModule from './contact'
import menuModule from './menu';

function controller() {

    const home = document.querySelector('#home');
    home.addEventListener('click', (event) => {
        removeExistingElements();
        homeModule();
    });

    const menu = document.querySelector('#menu');
    menu.addEventListener('click', (event) => {
        removeExistingElements();
        menuModule();
    });

    const contact = document.querySelector('#contact');
    contact.addEventListener('click', (event) => {
        removeExistingElements();
        contactModule();
    });

    function removeExistingElements() {

        const buttons = [ ...document.querySelectorAll('.buttons') ];
        buttons.forEach(button => button.classList.remove('current-tab'));

        const content = document.querySelector('#content');
        const cardContainer = document.querySelector('.card-container');
        const main = document.querySelector('.main');

        if (cardContainer !== null) content.removeChild(cardContainer);
        if (main !== null) content.removeChild(main);
    }

    home.click();

}

controller();