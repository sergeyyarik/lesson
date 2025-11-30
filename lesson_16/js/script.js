document.addEventListener('click', documentActions);
// let main = document.querySelector('.main');
function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('.content-hed__burger')) {
        document.documentElement.toggleAttribute('data-menu-open');
    
    }

}