document.addEventListener('click', documentActions);

function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('.hero-hed__burger')) {
        document.documentElement.toggleAttribute('data-menu-open');
        console.log('Menu toggle');
    }
}