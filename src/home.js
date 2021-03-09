const homeModule = () => {

    const content = document.querySelector('#content');

    const homeTab = document.querySelector('#home');
    homeTab.classList.add('current-tab');

    const div = document.createElement('div');
    div.classList.add('main');

    const firstP = document.createElement('p');
    firstP.innerHTML = 'Each of our pizzas are specially made, savory round, flattened base of leavened wheat-based' +
                ' dough topped with tangy tomatoes, dripping cheese and various other ingredients as per your choice, baked' +
                ' at the perfect temperature to give you that blissful feeling of ecstasy that you will find no where else.';

    const secondP = document.createElement('p');
    secondP.innerHTML = 'Best pizza\'s from around the world now in your city. Visit us or order online!';


    div.appendChild(firstP);
    div.appendChild(secondP);
    content.appendChild(div);
};

export { homeModule as default };