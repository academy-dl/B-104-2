var popup = document.querySelector('.popup-bg');
var popupBtn = document.querySelector('.banner-btn_js');
var popupClose = document.querySelector('.close');
var input = popup.querySelector('input');

popupBtn.addEventListener('click', function() {
    popup.classList.add('popup-open');
    input.focus();
})

popupClose.addEventListener('click', function() {
    popup.classList.remove('popup-open');
})

window.addEventListener('keydown', function(event) {
    console.log(event);
    if (event.key === "Escape") {
        if(popup.classList.contains('popup-open')) {
            popup.classList.remove('popup-open');
        }
    }
})