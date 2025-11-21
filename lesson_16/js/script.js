document.addEventListener('click', documentActions);

function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('.burger__btn')) {
        document.documentElement.toggleAttribute('data-menu-open');
        console.log('Burger button clicked');
    }
}