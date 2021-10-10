const upBtn = document.querySelector('.other__btn-up');
const header = document.querySelector('.header');

window.onscroll = function() {
    if (window.pageYOffset > 200) {
        upBtn.classList.remove('noshown');
    } else {
        upBtn.classList.add('noshown');
    }
};

upBtn.onclick = function() {
    header.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })

};