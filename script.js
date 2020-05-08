// HTML elements
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const listItems = document.querySelectorAll('.nav li');
const h1 = document.querySelector('h1');

// eventHandlers
const toggleNav = () => {
    nav.classList.toggle('hidden');
    nav.classList.toggle('slide');
};
const changeBackgroundColor = target => document.body.classList = `${target.innerHTML.toLowerCase()}-bg`;
const changeActiveListItem = target => {
    listItems.forEach(item => item.classList = item.innerHTML.toLowerCase());
    target.classList = `${target.innerHTML.toLowerCase()}-active`;
};
const changeColorName = target => {
    const colorName = target.innerHTML;
    colorName === 'Home' ? h1.innerHTML = 'Gray' : h1.innerHTML = colorName;
};
const handleListItemEvent = (e, target) => {
    changeActiveListItem(target);
    if (e.type === 'click' || nav.className === 'slide') toggleNav(target);
    changeBackgroundColor(target);
    changeColorName(target);
};
const handleListItemClick = e => {
    const target = e.target;
    handleListItemEvent(e, target);
};

const handleKeyEvent = e => {
    const validKeys = ['1', '2', '3', '4'];
    let target;
    if (validKeys.includes(e.key)) {
        target = document.querySelector(`.nav li:nth-child(${e.key})`);
        handleListItemEvent(e, target);
    }

};

// add eventListeners to elements
hamburger.addEventListener('click', toggleNav);
listItems.forEach(item => item.addEventListener('click', handleListItemClick));
document.addEventListener('keyup', handleKeyEvent);