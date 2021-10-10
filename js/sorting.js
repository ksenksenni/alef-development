const catsBlock = document.querySelector('.cards');
const cats = Array.from(document.querySelectorAll('.cards__item'));
const priceBtn = document.querySelector('.sort-price-btn');
const monthBtn = document.querySelector('.sort-month-btn');

function updateCatsBlockContent() {
    const fragment = document.createDocumentFragment();

    cats.forEach(function(cat) {
        fragment.appendChild(cat);
    })
    catsBlock.innerHTML = '';
    catsBlock.appendChild(fragment);
}

priceBtn.onclick = function() {
    cats.sort(function(a, b) {
        return a.dataset.price - b.dataset.price;
    });
    updateCatsBlockContent();
}

monthBtn.onclick = function() {
    cats.sort(function(a, b) {
        return a.dataset.month - b.dataset.month;
    });
    updateCatsBlockContent();
}