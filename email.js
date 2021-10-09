let email = document.querySelector('.subscription__form-input');
let noticeEmail = document.querySelector('.notice-block-email');
let form = document.querySelector('.subscription__form');
let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

debugger
email.onchange = function(e) {
    // console.log(e.target.value);
    if (e.target.value !== reg) {
        notice.classList.remove("noshown");
    }
    debugger
    form.onsubmit = function(evt) {
        evt.preventDefault()
    };
}




// function validate(form_id,email) {
//     var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//     var address = document.forms[form_id].elements[email].value;
//     if(reg.test(address) == false) {
//        alert('Введите корректный e-mail');
//        return false;
//     }
//  }


// let areas = document.querySelectorAll('.form__item-input');
// let areaPassword = document.querySelector('.form__item-password input');
// let messagePassword = document.querySelector('.form__error-attention-password');
// let popUpPassword = document.querySelector('.form__error-password');
// let form = document.querySelector('.form');

// areaPassword.onchange = function(e) {
//     console.log(e.target.value);
//     if (e.target.value.length < 4) {
//         messagePassword.classList.remove('off');
//         popUpPassword.classList.remove('off');
//         areaPassword.classList.add('error');
//     } else {
//         messagePassword.classList.add('off');
//         popUpPassword.classList.add('off');
//         areaPassword.classList.remove('error');

//     }
// };