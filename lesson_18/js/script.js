document.addEventListener('click', documentActions);

function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('.header-yoga__burger')) {
        document.documentElement.toggleAttribute('data-menu-open');
        console.log('Menu toggle');
    }
}