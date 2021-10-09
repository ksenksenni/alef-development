const email = document.querySelector('.subscription__form-input');
const noticeEmail = document.querySelector('.notice-block-email');
const submitBtn = document.querySelector('.subscription__form-btn');
const form = document.querySelector('.subscription__form');
const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

email.onchange = function(e) {
    console.log(e.target.value);
    if (!reg.test(e.target.value)) {
        noticeEmail.classList.remove("noshown");
        submitBtn.disabled = true;
    } else {
        submitBtn.disabled = false;
    }
}

function addNoShownClassToNotice() {
    noticeEmail.classList.add("noshown");
}

email.oninput = addNoShownClassToNotice;

form.onsubmit = function(evt) {
    evt.preventDefault()
    console.log("ghj")

    email.value = '';
    addNoShownClassToNotice();
};