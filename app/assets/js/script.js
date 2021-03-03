let menu_bar = document.getElementsByClassName('menu_bar')[0];
let menu = document.getElementsByClassName('menu')[0];
let menuGold = document.getElementsByClassName('menuGold')[0];
function menu_open() {
    let not_none = menu_bar.classList.contains("none");
    if (not_none) {
        menu_bar.classList.remove("none");
        $('header').addClass('black');
    } else {
        menu_bar.classList.add("none");
        $('header').removeClass('black');
    }
};
menu.addEventListener('click', function () {
    menu_open();
})
menuGold.addEventListener('click', function () {
    menu_open();
})

//gold

