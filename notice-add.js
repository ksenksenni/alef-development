let notice = document.querySelector('.notice-block');
let closeBtn = document.querySelector('.close-btn');
let likes = document.querySelectorAll('.passive');


for (like of likes)
    like.addEventListener('click', function() {
        notice.classList.remove("noshown");

    });

closeBtn.addEventListener('click', function() {
    notice.classList.add("noshown");

});